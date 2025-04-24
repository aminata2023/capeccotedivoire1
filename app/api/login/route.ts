import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await compare(password, user.password))) {
    return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
  }

  // Enregistre un cookie simple (tu peux améliorer avec un vrai token)
  const cookieStore = await cookies();
  cookieStore.set("auth", "authenticated", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 1 jour
  });

  return NextResponse.json({ success: true });
}
