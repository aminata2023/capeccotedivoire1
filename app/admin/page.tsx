'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BarChart, Users, FileText, Calendar, Settings } from 'lucide-react'

type StatCardProps = {
  icon: React.ReactNode
  title: string
  value: number
  link: string
}

type DashboardButtonProps = {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

export default function DashboardPage() {
  const router = useRouter()
  const [stats, setStats] = useState({
    publications: 0,
    members: 0,
    events: 0,
    media: 0
  })

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check', {
          method: 'GET',
          credentials: 'include'
        })

        if (!res.ok) {
          router.push('/login')
          return
        }

        // Simule chargement stats (à remplacer par API réelle)
        setStats({
          publications: 24,
          members: 156,
          events: 8,
          media: 42
        })
      } catch (error) {
        console.error('Erreur auth :', error)
        router.push('/login')
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">CAPEC Admin</h1>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">admin@capec.org</span>
            <button 
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' })
                router.push('/login')
              }}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<FileText className="text-blue-600" size={24} />} title="Publications" value={stats.publications} link="/admin/publications" />
          <StatCard icon={<Users className="text-green-600" size={24} />} title="Membres" value={stats.members} link="/admin/membres" />
          <StatCard icon={<Calendar className="text-orange-600" size={24} />} title="Événements" value={stats.events} link="/admin/evenements" />
          <StatCard icon={<BarChart className="text-purple-600" size={24} />} title="Médias" value={stats.media} link="/admin/medias" />
        </div>

        {/* Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Activité Récente</h2>
            <div className="space-y-4">
              {[
                { id: 1, action: "Nouvelle publication ajoutée", date: "28/04/2025", user: "Admin" },
                { id: 2, action: "Mise à jour des médias", date: "27/04/2025", user: "Moderateur" },
                { id: 3, action: "Événement programmé", date: "26/04/2025", user: "Admin" }
              ].map(item => (
                <div key={item.id} className="border-b pb-3 last:border-0">
                  <p className="font-medium">{item.action}</p>
                  <p className="text-sm text-gray-500">{item.date} par {item.user}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Actions Rapides</h2>
            <div className="space-y-3">
              <DashboardButton icon={<FileText size={18} />} label="Nouvelle Publication" onClick={() => router.push('/admin/publications/new')} />
              <DashboardButton icon={<Users size={18} />} label="Ajouter un Membre" onClick={() => router.push('/admin/membres/new')} />
              <DashboardButton icon={<Calendar size={18} />} label="Créer un Événement" onClick={() => router.push('/admin/evenements/new')} />
              <DashboardButton icon={<Settings size={18} />} label="Paramètres" onClick={() => router.push('/admin/parametres')} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, title, value, link }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      </div>
      <a href={link} className="inline-block mt-4 text-blue-600 hover:underline text-sm">
        Voir tous →
      </a>
    </div>
  )
}

function DashboardButton({ icon, label, onClick }: DashboardButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
    >
      <div className="p-2 bg-blue-100 text-blue-600 rounded-full">{icon}</div>
      <span>{label}</span>
    </button>
  )
}
