import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Calendar, BookOpen, Globe, BarChart } from "lucide-react"

export default function NosActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Activités</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les principales activités du CAPEC, de la recherche à la formation en passant par le conseil et la
            diffusion des connaissances.
          </p>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          
      <Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
        <CardContent className="p-6 flex flex-col space-y-4">
        
        <div className="p-3 rounded-full bg-orange-100 self-center">
          <FileText className="h-6 w-6 text-ci-orange" />
        </div>

        <h3 className="text-xl font-bold text-center">Recherche</h3>

        <p className="text-muted-foreground text-center">
          Conduire des recherches de haute qualité sur les questions économiques pertinentes pour la Côte d'Ivoire
          et l'Afrique de l'Ouest.
        </p>

        <ul className="text-sm text-left w-full space-y-2">
          <li className="flex items-start">
            <span className="text-ci-orange mr-2">•</span>
            <span>Études macroéconomiques et sectorielles</span>
          </li>
          <li className="flex items-start">
            <span className="text-ci-orange mr-2">•</span>
            <span>Analyses des politiques publiques</span>
          </li>
          <li className="flex items-start">
            <span className="text-ci-orange mr-2">•</span>
            <span>Évaluations d'impact des programmes de développement</span>
          </li>
        </ul>
          <Image
          src="/images/33612.jpg?text=Recherche+Économique&height=150&width=300"
          alt="Recherche économique"
          width={300}
          height={150}
          className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
        />
          </CardContent>
      </Card> 
      {/* section formation*/ }
      <Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
  <CardContent className="p-6 flex flex-col space-y-4">
    <div className="p-3 rounded-full bg-green-100 self-center">
      <Users className="h-6 w-6 text-ci-green" />
    </div>
    <h3 className="text-xl font-bold text-center">Formation</h3>
    <p className="text-muted-foreground text-center">
      Former la prochaine génération d'analystes et de chercheurs en économie à travers divers programmes éducatifs.
    </p>
    <ul className="text-sm text-left w-full space-y-2">
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Séminaires de formation pour chercheurs</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Encadrement de doctorants et stagiaires</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Ateliers méthodologiques</span>
      </li>
    </ul>
    <Image
      src="/images/format.jpg?text=Formation+Académique&height=150&width=300"
      alt="Formation académique"
      width={300}
      height={150}
      className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </CardContent>
</Card>

<Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
  <CardContent className="p-6 flex flex-col space-y-4">
    <div className="p-3 rounded-full bg-orange-100 self-center">
      <Calendar className="h-6 w-6 text-ci-orange" />
    </div>
    <h3 className="text-xl font-bold text-center">Etude</h3>
    <p className="text-muted-foreground text-center">
      Fournir des conseils stratégiques aux décideurs politiques et aux parties prenantes sur les questions économiques.
    </p>
    <ul className="text-sm text-left w-full space-y-2">
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Assistance technique aux ministères</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Consultation pour organisations internationales</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Appui aux collectivités locales</span>
      </li>
    </ul>
    <Image
      src="/images/etudeactivite.jpg?text=Conseil+Stratégique&height=150&width=300"
      alt="Conseil stratégique"
      width={300}
      height={150}
      className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </CardContent>
</Card>

<Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
  <CardContent className="p-6 flex flex-col space-y-4">
    <div className="p-3 rounded-full bg-green-100 self-center">
      <BookOpen className="h-6 w-6 text-ci-green" />
    </div>
    <h3 className="text-xl font-bold text-center">Publications</h3>
    <p className="text-muted-foreground text-center">
      Diffuser les résultats de nos recherches à travers diverses publications académiques et grand public.
    </p>
    <ul className="text-sm text-left w-full space-y-2">
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Articles dans des revues scientifiques</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Rapports de recherche et notes de politique</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Bulletins d'information économique</span>
      </li>
    </ul>
    <Image
      src="/images/1232.jpg?text=Publications+Académiques&height=150&width=300"
      alt="Publications académiques"
      width={300}
      height={150}
      className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </CardContent>
</Card>

<Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
  <CardContent className="p-6 flex flex-col space-y-4">
    <div className="p-3 rounded-full bg-orange-100 self-center">
      <Globe className="h-6 w-6 text-ci-orange" />
    </div>
    <h3 className="text-xl font-bold text-center">Conférences</h3>
    <p className="text-muted-foreground text-center">
      Organiser et participer à des conférences nationales et internationales sur les enjeux économiques.
    </p>
    <ul className="text-sm text-left w-full space-y-2">
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Conférence annuelle du CAPEC</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Séminaires thématiques</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-orange mr-2">•</span>
        <span>Participation à des forums internationaux</span>
      </li>
    </ul>
    <Image
      src="/images/1231.jpg?text=Conférences+Économiques&height=150&width=300"
      alt="Conférences économiques"
      width={300}
      height={150}
      className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </CardContent>
</Card>

<Card className="flex flex-col overflow-hidden shadow-md rounded-lg">
  <CardContent className="p-6 flex flex-col space-y-4">
    <div className="p-3 rounded-full bg-green-100 self-center">
      <BarChart className="h-6 w-6 text-ci-green" />
    </div>
    <h3 className="text-xl font-bold text-center">Analyse de données</h3>
    <p className="text-muted-foreground text-center">
      Collecter, analyser et interpréter des données économiques pour informer les politiques publiques.
    </p>
    <ul className="text-sm text-left w-full space-y-2">
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Enquêtes et collecte de données primaires</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Modélisation économétrique</span>
      </li>
      <li className="flex items-start">
        <span className="text-ci-green mr-2">•</span>
        <span>Visualisation et interprétation des données</span>
      </li>
    </ul>
    <Image
      src="/images/1230.jpg?text=Analyse+de+Données&height=150&width=300"
      alt="Analyse de données"
      width={300}
      height={150}
      className="w-full h-auto rounded-md object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </CardContent>
</Card>

        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Calendrier des activités</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Conférence annuelle de la CAPEC</h3>
                  <span className="text-ci-orange font-medium">Mars 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Conférence internationale sur les politiques économiques post-pandémie, réunissant des experts de
                  renommée mondiale.
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Séminaire de formation en économétrie</h3>
                  <span className="text-ci-orange font-medium">Juin 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Formation avancée sur les techniques économétriques pour les chercheurs et doctorants.
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Forum sur l'intégration économique régionale</h3>
                  <span className="text-ci-orange font-medium">Septembre 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Forum réunissant des acteurs économiques et politiques pour discuter des enjeux de l'intégration
                  régionale.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Atelier sur les politiques d'inclusion financière</h3>
                  <span className="text-ci-orange font-medium">Novembre 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Atelier réunissant des acteurs du secteur financier et des décideurs politiques pour discuter des
                  stratégies d'inclusion financière.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

