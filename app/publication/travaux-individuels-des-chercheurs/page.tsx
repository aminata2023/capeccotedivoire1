import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Search, User } from "lucide-react"

export default function TravauxIndividuelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/publication/travaux-des-chercheurs" className="hover:text-ci-orange">
              Nouvelle
            </Link>
            <span>/</span>
            <span>Travaux Individuels de Recherche</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Travaux Individuels de Recherche
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les travaux de recherche menés individuellement par nos chercheurs dans leurs domaines
            d'expertise.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Travaux+Individuels+de+Recherche&height=300&width=1200"
            alt="Travaux Individuels de Recherche"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Excellence individuelle</h2>
              <p>
                Nos chercheurs mènent des travaux de recherche individuels pour approfondir leurs domaines d'expertise
                et contribuer à l'avancement des connaissances.
              </p>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Filtrer les travaux</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher un travail..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Chercheur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les chercheurs</SelectItem>
                <SelectItem value="diallo">Dr. Amadou Diallo</SelectItem>
                <SelectItem value="kone">Dr. Marie Koné</SelectItem>
                <SelectItem value="toure">Dr. Jean Touré</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Domaine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les domaines</SelectItem>
                <SelectItem value="macroeconomie">Macroéconomie</SelectItem>
                <SelectItem value="developpement">Développement</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[150px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les années</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Liste des travaux */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travauxIndividuels.map((travail) => (
            <Card key={travail.id} className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={travail.coverImage || "/placeholder.svg"}
                  alt={travail.title}
                  width={600}
                  height={340}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{travail.date}</span>
                    <span className="text-xs bg-orange-100 text-ci-orange px-2 py-1 rounded-full">{travail.type}</span>
                  </div>
                  <h3 className="font-bold">{travail.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{travail.excerpt}</p>

                  <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                    <User className="h-3 w-3 text-ci-green mr-1" />
                    <span className="text-xs text-muted-foreground">{travail.author}</span>
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                  <Link href={`/nouvelle/travaux-individuels/${travail.id}`}>
                    <Button variant="link" className="p-0 h-auto text-ci-green hover:text-green-700">
                      Lire plus
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Nos chercheurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {chercheurs.map((chercheur) => (
              <Link key={chercheur.id} href={`/chercheur/${chercheur.id}`} className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-ci-orange transition-colors">
                    <Image
                      src={chercheur.photo || "/placeholder.svg"}
                      alt={chercheur.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm group-hover:text-ci-orange transition-colors">{chercheur.name}</h3>
                  <p className="text-xs text-muted-foreground">{chercheur.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// Données d'exemple
const travauxIndividuels = [
  {
    id: "1",
    title: "Impact des politiques fiscales sur la croissance économique en Côte d'Ivoire",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme en Côte d'Ivoire.",
    date: "Mars 2023",
    author: "Dr. Amadou Diallo",
    type: "Étude",
    coverImage: "/placeholder.svg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    title: "Inégalités de genre et développement économique",
    excerpt:
      "Ce projet examine comment les inégalités de genre affectent le développement économique et propose des politiques pour promouvoir l'égalité.",
    date: "Février 2023",
    author: "Dr. Marie Koné",
    type: "Recherche",
    coverImage: "/placeholder.svg?text=Inégalités+de+Genre&height=340&width=600",
  },
  {
    id: "3",
    title: "Microfinance et réduction de la pauvreté en milieu rural",
    excerpt:
      "Ce projet analyse l'efficacité des programmes de microfinance dans la réduction de la pauvreté dans les zones rurales de Côte d'Ivoire.",
    date: "Janvier 2023",
    author: "Dr. Jean Touré",
    type: "Recherche",
    coverImage: "/placeholder.svg?text=Microfinance&height=340&width=600",
  },
  {
    id: "4",
    title: "Économie sociale et solidaire : modèles et impacts",
    excerpt:
      "Ce projet étudie les différents modèles d'économie sociale et solidaire et leur impact sur le développement communautaire.",
    date: "Décembre 2022",
    author: "Dr. Fatou Sow",
    type: "Recherche",
    coverImage: "/placeholder.svg?text=Économie+Sociale&height=340&width=600",
  },
  {
    id: "5",
    title: "Intégration régionale et commerce intra-africain",
    excerpt:
      "Ce projet analyse les obstacles et opportunités pour l'intégration économique régionale et le développement du commerce intra-africain.",
    date: "Novembre 2022",
    author: "Dr. Paul Mensah",
    type: "Étude",
    coverImage: "/placeholder.svg?text=Intégration+Régionale&height=340&width=600",
  },
  {
    id: "6",
    title: "Transformation des systèmes agricoles face au changement climatique",
    excerpt:
      "Ce projet étudie comment les systèmes agricoles peuvent être transformés pour s'adapter aux défis du changement climatique.",
    date: "Octobre 2022",
    author: "Dr. Aminata Bamba",
    type: "Recherche",
    coverImage: "/placeholder.svg?text=Transformation+Agricole&height=340&width=600",
  },
]

// Données d'exemple
const chercheurs = [
  {
    id: "1",
    name: "Dr. Amadou Diallo",
    title: "Directeur / Chercheur Senior",
    photo: "/placeholder.svg?text=AD&height=100&width=100",
  },
  {
    id: "2",
    name: "Dr. Marie Koné",
    title: "Directrice Adjointe / Chercheuse Senior",
    photo: "/placeholder.svg?text=MK&height=100&width=100",
  },
  {
    id: "3",
    name: "Dr. Jean Touré",
    title: "Chercheur Senior",
    photo: "/placeholder.svg?text=JT&height=100&width=100",
  },
  {
    id: "4",
    name: "Dr. Fatou Sow",
    title: "Chercheuse Senior",
    photo: "/placeholder.svg?text=FS&height=100&width=100",
  },
  {
    id: "5",
    name: "Dr. Paul Mensah",
    title: "Chercheur",
    photo: "/placeholder.svg?text=PM&height=100&width=100",
  },
  {
    id: "6",
    name: "Dr. Aminata Bamba",
    title: "Chercheuse",
    photo: "/placeholder.svg?text=AB&height=100&width=100",
  },
]

