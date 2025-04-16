"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"

interface Video {
  id: string
  title: string
  date: string
  description: string
  thumbnail?: string
}

export default function VideothequeePage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const openVideo = (video: Video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vidéothèque</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les vidéos des conférences, interviews et événements du CAPEC.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">Toutes les vidéos</TabsTrigger>
            <TabsTrigger value="conferences">Conférences</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allVideos.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="conferences" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferencesVideos.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="interviews" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewsVideos.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="formations" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formationsVideos.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={() => openVideo(video)} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeVideo}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative pb-[56.25%] h-0">
              {/* In a real implementation, this would be an iframe with the actual video */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-xl font-bold mb-2">{selectedVideo.title}</p>
                  <p className="text-sm text-white/80 mb-4">{selectedVideo.date}</p>
                  <p className="bg-ci-orange text-white px-4 py-2 rounded-md inline-block">
                    Ceci est un emplacement pour la vidéo: {selectedVideo.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black/70 p-4 text-white">
              <h3 className="font-bold text-lg">{selectedVideo.title}</h3>
              <p className="text-sm text-white/80">{selectedVideo.date}</p>
              <p className="mt-2">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

function VideoCard({ video, onPlay }: { readonly video: Video; readonly onPlay: () => void }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video cursor-pointer group" onClick={onPlay}>
        <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-ci-orange flex items-center justify-center">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold line-clamp-1">{video.title}</h3>
        <p className="text-xs text-muted-foreground">{video.date}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{video.description}</p>
      </CardContent>
    </Card>
  )
}

// Sample data
const conferencesVideos = [
  {
    id: "vid1",
    title: "Conférence annuelle du CAPEC 2023 - Session d'ouverture",
    date: "15 mars 2023",
    description: "Discours d'ouverture de la conférence internationale sur les politiques économiques post-pandémie.",
    thumbnail: "/placeholder.svg?text=Conférence+2023+Ouverture&height=360&width=640",
  },
  {
    id: "vid2",
    title: "Panel sur l'intégration économique régionale",
    date: "10 novembre 2022",
    description:
      "Discussion entre experts sur les défis et opportunités de l'intégration économique en Afrique de l'Ouest.",
    thumbnail: "/placeholder.svg?text=Panel+Intégration+Économique&height=360&width=640",
  },
  {
    id: "vid3",
    title: "Conférence sur le développement durable - Keynote",
    date: "5 juin 2022",
    description: "Présentation principale sur les politiques économiques favorisant un développement durable.",
    thumbnail: "/placeholder.svg?text=Conférence+Développement+Durable&height=360&width=640",
  },
]

const interviewsVideos = [
  {
    id: "vid4",
    title: "Interview du Directeur du CAPEC",
    date: "20 avril 2023",
    description: "Entretien avec le Dr. Amadou Diallo sur les perspectives économiques pour l'Afrique de l'Ouest.",
    thumbnail: "/placeholder.svg?text=Interview+Directeur&height=360&width=640",
  },
  {
    id: "vid5",
    title: "Entretien avec Dr. Marie Koné sur les politiques d'inclusion",
    date: "15 février 2023",
    description: "La Directrice Adjointe du CAPEC discute des politiques d'inclusion économique et sociale.",
    thumbnail: "/placeholder.svg?text=Entretien+Dr+Koné&height=360&width=640",
  },
  {
    id: "vid6",
    title: "Débat sur les réformes économiques",
    date: "10 décembre 2022",
    description: "Débat entre chercheurs du CAPEC et décideurs politiques sur les réformes économiques nécessaires.",
    thumbnail: "/placeholder.svg?text=Débat+Réformes+Économiques&height=360&width=640",
  },
]

const formationsVideos = [
  {
    id: "vid7",
    title: "Introduction à l'analyse économétrique",
    date: "5 mars 2023",
    description: "Première session de la formation en modélisation économétrique pour les chercheurs.",
    thumbnail: "/placeholder.svg?text=Formation+Économétrie&height=360&width=640",
  },
  {
    id: "vid8",
    title: "Méthodes d'évaluation des politiques publiques",
    date: "18 janvier 2023",
    description: "Présentation des méthodes quantitatives et qualitatives pour l'évaluation des politiques publiques.",
    thumbnail: "/placeholder.svg?text=Méthodes+Évaluation&height=360&width=640",
  },
  {
    id: "vid9",
    title: "Webinaire sur l'analyse macroéconomique",
    date: "10 novembre 2022",
    description: "Webinaire en ligne sur les outils de prévision macroéconomique pour les analystes.",
    thumbnail: "/placeholder.svg?text=Webinaire+Macroéconomie&height=360&width=640",
  },
]

const allVideos = [...conferencesVideos, ...interviewsVideos, ...formationsVideos]

