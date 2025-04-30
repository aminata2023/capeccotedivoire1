'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  // Protection basique de la page
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check')
        if (!res.ok) {
          router.push('/login')
        }
      } catch (error) {
        router.push('/login')
      }
    }
    checkAuth()
  }, [router])

  return (
    <div className="admin-container">
      <h1>Tableau de bord Admin</h1>
      {/* Votre contenu admin ici */}
    </div>
  )
}