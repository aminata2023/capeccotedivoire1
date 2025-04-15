import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Users, BookOpen, Search } from "lucide-react"

export default function NouvellePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nouvelle</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos travaux de recherche individuels et collectifs, ainsi que nos études commanditées et projets
            de recherche.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Travaux+de+Recherche+du+CAPEC&height=300&width=1200"
            alt="Travaux de Recherche du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Excellence en recherche</h2>
              <p>
                Le CAPEC mène des travaux de recherche de haute qualité pour contribuer au développement économique et
                social.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg?text=Travaux+Individuels+de+Recherche&height=300&width=600"
                alt="Travaux Individuels de Recherche"
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">Travaux Individuels de Recherche</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="p-3 rounded-full bg-orange-100 self-start mb-4">
                <Users className="h-6 w-6 text-ci-orange" />
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Découvrez les travaux de recherche menés individuellement par nos chercheurs, incluant des études
                commanditées et des projets de recherche personnels.
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/nouvelle/travaux-individuels/etude-commandite">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Études Commanditées
                  </Button>
                </Link>
                <Link href="/nouvelle/travaux-individuels/projet-recherche">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Projets de Recherche
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg?text=Travaux+de+Recherche&height=300&width=600"
                alt="Travaux de Recherche"
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">Travaux de Recherche</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="p-3 rounded-full bg-green-100 self-start mb-4">
                <FileText className="h-6 w-6 text-ci-green" />
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Explorez nos travaux de recherche collectifs, incluant des études commanditées par des organisations
                externes et des projets de recherche initiés par le CAPEC.
              </p>
              <div className="flex flex-col space-y-2">
                <Link href="/nouvelle/travaux-recherche/etudes-commanditees">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Études Commanditées
                  </Button>
                </Link>
                <Link href="/nouvelle/travaux-recherche/projet-recherche">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Projets de Recherche
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <Search className="mr-2 h-6 w-6 text-ci-orange" />
                Rechercher des travaux
              </h2>
              <p className="text-muted-foreground">
                Utilisez notre moteur de recherche pour trouver des travaux spécifiques par thème, auteur ou année.
              </p>
            </div>
            <Link href="/recherches">
              <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                Accéder à la recherche avancée
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

