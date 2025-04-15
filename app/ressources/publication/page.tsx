"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Search, FileText, Download, User, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [chercheurFilter, setChercheurFilter] = useState("all")

  // Filtrer les publications en fonction des critères
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.author && pub.author.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || pub.category === categoryFilter

    const pubYear = new Date(pub.date).getFullYear().toString()
    const matchesYear = yearFilter === "all" || pubYear === yearFilter

    const matchesChercheur = chercheurFilter === "all" || (pub.author && pub.author === chercheurFilter)

    return matchesSearch && matchesCategory && matchesYear && matchesChercheur
  })

  // Filtrer les publications par chercheur pour l'onglet "Recherches par chercheur"
  const getPublicationsByChercheur = (chercheurId) => {
    return publications.filter((pub) => pub.authorId === chercheurId)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos travaux de recherche, rapports, notes de politique et autres publications, y compris les
            recherches individuelles de nos chercheurs.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Centre+de+Documentation+du+CAPEC&height=300&width=1200"
            alt="Centre de documentation du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Centre de documentation</h2>
              <p>Accédez à notre bibliothèque complète d'études et de publications sur les politiques économiques.</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Toutes les publications</TabsTrigger>
            <TabsTrigger value="by-researcher">Recherches par chercheur</TabsTrigger>
            <TabsTrigger value="recent">Publications récentes</TabsTrigger>
          </TabsList>

          {/* Onglet Toutes les publications */}
          <TabsContent value="all" className="mt-6">
            {/* Filtres */}
            <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5 text-ci-orange" />
                Filtrer les publications
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Rechercher une publication..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="rapport">Rapports</SelectItem>
                    <SelectItem value="etude">Études</SelectItem>
                    <SelectItem value="policy-brief">Notes de politique</SelectItem>
                    <SelectItem value="article">Articles académiques</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-full md:w-[150px] border-ci-green focus:ring-ci-orange">
                    <SelectValue placeholder="Année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les années</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={chercheurFilter} onValueChange={setChercheurFilter}>
                  <SelectTrigger className="w-full md:w-[250px] border-ci-green focus:ring-ci-orange">
                    <SelectValue placeholder="Chercheur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les chercheurs</SelectItem>
                    {chercheurs.map((chercheur) => (
                      <SelectItem key={chercheur.id} value={chercheur.name}>
                        {chercheur.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Publications Grid */}
            <div className="mt-8">
              {filteredPublications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPublications.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Aucune publication ne correspond à votre recherche.</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Onglet Recherches par chercheur */}
          <TabsContent value="by-researcher" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chercheurs.map((chercheur) => (
                <ChercheurPublicationsCard
                  key={chercheur.id}
                  chercheur={chercheur}
                  publications={getPublicationsByChercheur(chercheur.id)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Onglet Publications récentes */}
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 6)
                .map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Section téléchargements */}
        <div className="mt-16 bg-orange-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <Download className="mr-2 h-6 w-6 text-ci-orange" />
                Catalogue des publications
              </h2>
              <p className="text-muted-foreground">
                Téléchargez notre catalogue complet des publications pour une référence hors ligne.
              </p>
            </div>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white">
              Télécharger le catalogue (PDF)
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function PublicationCard({ publication }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={publication.coverImage || "/placeholder.svg"}
          alt={publication.title}
          width={600}
          height={340}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="space-y-2 flex-grow">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{publication.date}</span>
            <span className="text-xs bg-orange-100 text-ci-orange px-2 py-1 rounded-full">
              {getCategoryLabel(publication.category)}
            </span>
          </div>
          <h3 className="font-bold">{publication.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{publication.excerpt}</p>

          {publication.author && (
            <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
              <User className="h-3 w-3 text-ci-green mr-1" />
              <span className="text-xs text-muted-foreground">{publication.author}</span>
            </div>
          )}
        </div>
        <div className="pt-4 mt-auto flex justify-between items-center">
          <Link href={`/publications/${publication.id}`}>
            <Button variant="link" className="p-0 h-auto text-ci-green hover:text-green-700">
              Lire plus
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
         
        </div>
      </CardContent>
    </Card>
  )
}

function ChercheurPublicationsCard({ chercheur, publications }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-ci-orange">
            <AvatarImage src={chercheur.photo} alt={chercheur.name} />
            <AvatarFallback className="bg-orange-100 text-ci-orange">
              {chercheur.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{chercheur.name}</h3>
            <p className="text-sm text-ci-green">{chercheur.title}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-2">
          <h4 className="font-medium text-sm mb-3 flex items-center">
            <FileText className="h-4 w-4 mr-2 text-ci-orange" />
            Publications ({publications.length})
          </h4>

          {publications.length > 0 ? (
            <ul className="space-y-3">
              {publications.slice(0, 3).map((pub) => (
                <li key={pub.id} className="text-sm">
                  <Link href={`/publications/${pub.id}`} className="hover:text-ci-green transition-colors">
                    <div className="flex items-start">
                      <span className="text-ci-orange mr-2">•</span>
                      <div>
                        <p className="font-medium">{pub.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {pub.date} • {getCategoryLabel(pub.category)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}

              {publications.length > 3 && (
                <li className="text-sm text-center pt-2">
                  <Link href={`/chercheur/${chercheur.id}/publications`}>
                    <Button variant="link" className="text-ci-green p-0 h-auto">
                      Voir toutes les publications ({publications.length})
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">Aucune publication disponible.</p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link href={`/chercheur/${chercheur.id}`}>
            <Button variant="outline" className="w-full border-ci-orange text-ci-orange hover:bg-orange-50">
              Voir le profil complet
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function getCategoryLabel(category) {
  const categories = {
    rapport: "Rapport",
    etude: "Étude",
    "policy-brief": "Note de politique",
    article: "Article académique",
  }
  return categories[category] || category
}

// Données des chercheurs
const chercheurs = [
  {
    id: "1",
    name: "Dr. Amadou Diallo",
    title: "Directeur / Chercheur Senior",
    photo: "/placeholder.svg?text=AD&height=100&width=100",
    expertise: ["Macroéconomie", "Politiques publiques", "Développement durable"],
  },
  {
    id: "2",
    name: "Dr. Marie Koné",
    title: "Directrice Adjointe / Chercheuse Senior",
    photo: "/placeholder.svg?text=MK&height=100&width=100",
    expertise: ["Économie du genre", "Développement durable", "Politiques sociales"],
  },
  {
    id: "3",
    name: "Dr. Jean Touré",
    title: "Chercheur Senior",
    photo: "/placeholder.svg?text=JT&height=100&width=100",
    expertise: ["Inclusion financière", "Réduction de la pauvreté", "Microfinance"],
  },
  {
    id: "4",
    name: "Dr. Fatou Sow",
    title: "Chercheuse Senior",
    photo: "/placeholder.svg?text=FS&height=100&width=100",
    expertise: ["Économie sociale", "Évaluation d'impact", "Politiques de genre"],
  },
  {
    id: "5",
    name: "Dr. Paul Mensah",
    title: "Chercheur",
    photo: "/placeholder.svg?text=PM&height=100&width=100",
    expertise: ["Commerce international", "Intégration régionale", "Économétrie"],
  },
  {
    id: "6",
    name: "Dr. Aminata Bamba",
    title: "Chercheuse",
    photo: "/placeholder.svg?text=AB&height=100&width=100",
    expertise: ["Économie agricole", "Développement rural", "Chaînes de valeur"],
  },
]

// Sample data with updated image placeholders and author information
const publications = [
  {
    id: "1",
    title: "Impact des politiques fiscales sur la croissance économique",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme et propose des recommandations pour optimiser le système fiscal.",
    date: "15 février 2023",
    category: "etude",
    author: "Dr. Amadou Diallo",
    authorId: "1",
    coverImage: "/placeholder.svg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    title: "Analyse du marché du travail et des inégalités salariales",
    excerpt:
      "Une étude approfondie des dynamiques du marché du travail et des facteurs contribuant aux inégalités salariales dans différents secteurs économiques.",
    date: "10 janvier 2023",
    category: "rapport",
    author: "Dr. Marie Koné",
    authorId: "2",
    coverImage: "/placeholder.svg?text=Marché+du+Travail&height=340&width=600",
  },
  {
    id: "3",
    title: "Évaluation des politiques de développement durable",
    excerpt:
      "Cette publication examine l'efficacité des politiques de développement durable et propose des recommandations pour améliorer leur mise en œuvre et leur impact environnemental et social.",
    date: "5 décembre 2022",
    category: "policy-brief",
    author: "Dr. Jean Touré",
    authorId: "3",
    coverImage: "/placeholder.svg?text=Développement+Durable&height=340&width=600",
  },
  {
    id: "4",
    title: "L'impact économique de la digitalisation des services publics",
    excerpt:
      "Ce rapport analyse les bénéfices économiques et sociaux de la transformation numérique des services publics et identifie les obstacles à surmonter.",
    date: "20 octobre 2022",
    category: "rapport",
    author: "Dr. Paul Mensah",
    authorId: "5",
    coverImage: "/placeholder.svg?text=Digitalisation+Services+Publics&height=340&width=600",
  },
  {
    id: "5",
    title: "Politiques monétaires et stabilité macroéconomique",
    excerpt:
      "Une analyse des effets des politiques monétaires sur la stabilité des prix et la croissance économique dans un contexte d'incertitude globale.",
    date: "15 septembre 2022",
    category: "article",
    author: "Dr. Amadou Diallo",
    authorId: "1",
    coverImage: "/placeholder.svg?text=Politiques+Monétaires&height=340&width=600",
  },
  {
    id: "6",
    title: "Stratégies d'inclusion financière pour les zones rurales",
    excerpt:
      "Cette étude examine les différentes approches pour améliorer l'accès aux services financiers dans les zones rurales et leur impact sur le développement local.",
    date: "5 août 2022",
    category: "etude",
    author: "Dr. Jean Touré",
    authorId: "3",
    coverImage: "/placeholder.svg?text=Inclusion+Financière+Rurale&height=340&width=600",
  },
  {
    id: "7",
    title: "Analyse comparative des systèmes de protection sociale",
    excerpt:
      "Ce rapport compare l'efficacité des différents modèles de protection sociale et leur adaptabilité aux contextes socio-économiques variés.",
    date: "10 juillet 2022",
    category: "rapport",
    author: "Dr. Marie Koné",
    authorId: "2",
    coverImage: "/placeholder.svg?text=Protection+Sociale&height=340&width=600",
  },
  {
    id: "8",
    title: "Impact du changement climatique sur les économies agricoles",
    excerpt:
      "Cette note de politique analyse les conséquences économiques du changement climatique sur le secteur agricole et propose des mesures d'adaptation.",
    date: "15 juin 2022",
    category: "policy-brief",
    author: "Dr. Aminata Bamba",
    authorId: "6",
    coverImage: "/placeholder.svg?text=Climat+et+Agriculture&height=340&width=600",
  },
  {
    id: "9",
    title: "Éducation et développement des compétences pour l'économie du futur",
    excerpt:
      "Une étude sur l'adéquation entre les systèmes éducatifs actuels et les besoins en compétences des économies en transformation rapide.",
    date: "20 mai 2022",
    category: "etude",
    author: "Dr. Fatou Sow",
    authorId: "4",
    coverImage: "/placeholder.svg?text=Éducation+et+Compétences&height=340&width=600",
  },
  {
    id: "10",
    title: "Analyse des flux commerciaux régionaux et opportunités d'intégration",
    excerpt:
      "Ce rapport examine les tendances des échanges commerciaux régionaux et identifie les opportunités pour renforcer l'intégration économique.",
    date: "10 avril 2022",
    category: "article",
    author: "Dr. Paul Mensah",
    authorId: "5",
    coverImage: "/placeholder.svg?text=Commerce+Régional&height=340&width=600",
  },
  {
    id: "11",
    title: "Évaluation de l'impact des investissements directs étrangers",
    excerpt:
      "Cette étude analyse les effets des investissements directs étrangers sur la croissance économique, l'emploi et le transfert de technologies.",
    date: "15 mars 2022",
    category: "etude",
    author: "Dr. Amadou Diallo",
    authorId: "1",
    coverImage: "/placeholder.svg?text=Investissements+Étrangers&height=340&width=600",
  },
  {
    id: "12",
    title: "Politiques d'innovation et compétitivité économique",
    excerpt:
      "Un examen des politiques d'innovation et leur rôle dans le renforcement de la compétitivité économique nationale et internationale.",
    date: "20 février 2022",
    category: "policy-brief",
    author: "Dr. Marie Koné",
    authorId: "2",
    coverImage: "/placeholder.svg?text=Innovation+et+Compétitivité&height=340&width=600",
  },
]