/*import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

interface RegisterRequest {
  email: string
  name?: string
  password: string
}

export async function POST(request: Request) {
  try {
    const { email, name, password }: RegisterRequest = await request.json()
    
    // Vérification si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email déjà utilisé' },
        { status: 400 }
      )
    }

    // Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password, // Stockage en clair comme demandé
        role: 'admin'
      }
    })

    return NextResponse.json({ 
      message: 'Compte créé avec succès',
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      }
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}*/