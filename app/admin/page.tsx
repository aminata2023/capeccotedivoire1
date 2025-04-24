import { cookies } from "next/headers";

export default async function AdminPage() {
  const cookiesData = await cookies();
  const auth = cookiesData.get("auth");

  if (auth?.value !== "authenticated") {
    return <p>Accès refusé</p>;
  }

  return <div className="p-6">Bienvenue dans le back-office !</div>;
}
