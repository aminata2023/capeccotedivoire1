/*import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

interface LoginRequest {
  email: string
  password: string
}

export async function POST(request: Request) {
  try {
    const { email, password }: LoginRequest = await request.json()
    
    const user = await prisma.user.findUnique({ 
      where: { email } 
    })

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Identifiants invalides' },
        { status: 401 }
      )
    }

    return NextResponse.json({ 
      message: 'Connexion réussie',
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}*/