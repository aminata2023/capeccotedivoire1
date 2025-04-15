import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Calendar, BookOpen, Globe, Award } from "lucide-react"

export default function CapecEnChiffresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">La CAPEC en Chiffres</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les chiffres clés qui illustrent l'impact et les réalisations du CAPEC depuis sa création.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-ci-orange/10 to-ci-orange/5 border-ci-orange">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-orange/20 mt-4">
                <Calendar className="h-8 w-8 text-ci-orange" />
              </div>
              <h3 className="text-4xl font-bold text-ci-orange">25</h3>
              <p className="text-lg font-medium">Années d'existence</p>
              <p className="text-muted-foreground">
                Depuis sa création en 1998, le CAPEC contribue au développement économique et social de la Côte
                d'Ivoire.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ci-green/10 to-ci-green/5 border-ci-green">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-green/20 mt-4">
                <Users className="h-8 w-8 text-ci-green" />
              </div>
              <h3 className="text-4xl font-bold text-ci-green">35</h3>
              <p className="text-lg font-medium">Chercheurs et personnel</p>
              <p className="text-muted-foreground">
                Une équipe pluridisciplinaire composée de chercheurs permanents, associés et de personnel administratif.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ci-orange/10 to-ci-orange/5 border-ci-orange">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-orange/20 mt-4">
                <FileText className="h-8 w-8 text-ci-orange" />
              </div>
              <h3 className="text-4xl font-bold text-ci-orange">250+</h3>
              <p className="text-lg font-medium">Publications</p>
              <p className="text-muted-foreground">
                Plus de 250 publications, incluant des articles scientifiques, rapports de recherche et notes de
                politique.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ci-green/10 to-ci-green/5 border-ci-green">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-green/20 mt-4">
                <BookOpen className="h-8 w-8 text-ci-green" />
              </div>
              <h3 className="text-4xl font-bold text-ci-green">120</h3>
              <p className="text-lg font-medium">Doctorants formés</p>
              <p className="text-muted-foreground">
                Le CAPEC a contribué à la formation de plus de 120 doctorants en économie et disciplines connexes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ci-orange/10 to-ci-orange/5 border-ci-orange">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-orange/20 mt-4">
                <Globe className="h-8 w-8 text-ci-orange" />
              </div>
              <h3 className="text-4xl font-bold text-ci-orange">45</h3>
              <p className="text-lg font-medium">Partenariats internationaux</p>
              <p className="text-muted-foreground">
                Des collaborations avec des universités, centres de recherche et organisations internationales.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ci-green/10 to-ci-green/5 border-ci-green">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-ci-green/20 mt-4">
                <Award className="h-8 w-8 text-ci-green" />
              </div>
              <h3 className="text-4xl font-bold text-ci-green">18</h3>
              <p className="text-lg font-medium">Prix et distinctions</p>
              <p className="text-muted-foreground">
                Reconnaissance de l'excellence de nos travaux de recherche et de notre contribution au développement.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Évolution des activités</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4">Publications par année</h3>
            <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Graphique des publications annuelles (2000-2023)</p>
            </div>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">Répartition des chercheurs par domaine</h3>
              <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Graphique de répartition par domaine</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">Financement des projets (en millions FCFA)</h3>
              <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Graphique de financement des projets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Impact de nos recherches</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-ci-orange">Politiques publiques</h3>
                <p className="text-muted-foreground mb-4">
                  Nos recherches ont influencé plus de 30 politiques publiques dans divers secteurs économiques et
                  sociaux.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>Réformes fiscales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>Politiques agricoles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>Stratégies d'inclusion financière</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>Politiques éducatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-ci-green">Renforcement des capacités</h3>
                <p className="text-muted-foreground mb-4">
                  Le CAPEC a contribué au renforcement des capacités nationales en matière d'analyse économique.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-ci-green mr-2">•</span>
                    <span>500+ professionnels formés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-green mr-2">•</span>
                    <span>50+ ateliers de formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-green mr-2">•</span>
                    <span>25 programmes de mentorat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-green mr-2">•</span>
                    <span>15 programmes d'échange</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-ci-orange">Rayonnement international</h3>
                <p className="text-muted-foreground mb-4">
                  Le CAPEC est reconnu comme un centre d'excellence en matière d'analyse économique en Afrique.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>Présence dans 20+ pays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>30+ conférences internationales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>15+ réseaux de recherche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ci-orange mr-2">•</span>
                    <span>10+ projets multinationaux</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

