import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, FileText, Users, BarChart } from "lucide-react"

export default function RecherchesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recherches</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les axes de recherche du CAPEC, nos projets en cours et nos principales réalisations dans le
            domaine de l'analyse économique.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Recherche+Économique+au+CAPEC&height=300&width=1200"
            alt="Recherche économique au CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Excellence en recherche</h2>
              <p>
                Le CAPEC mène des recherches de pointe sur les questions économiques pertinentes pour la Côte d'Ivoire
                et l'Afrique de l'Ouest.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Axes de recherche</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <Card key={area.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">{area.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-ci-green mr-2" />
                      <span>{area.researchers} chercheurs</span>
                    </div>
                    <Link href={`/recherches/${area.id}`}>
                      <Button variant="link" className="p-0 h-auto text-ci-orange">
                        En savoir plus
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Projets de recherche en cours</h2>
          <Tabs defaultValue="all" className="mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Tous les projets</TabsTrigger>
              <TabsTrigger value="national">Projets nationaux</TabsTrigger>
              <TabsTrigger value="regional">Projets régionaux</TabsTrigger>
              <TabsTrigger value="international">Projets internationaux</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="space-y-6">
                {currentProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="national" className="mt-6">
              <div className="space-y-6">
                {currentProjects
                  .filter((project) => project.type === "national")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="regional" className="mt-6">
              <div className="space-y-6">
                {currentProjects
                  .filter((project) => project.type === "regional")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="international" className="mt-6">
              <div className="space-y-6">
                {currentProjects
                  .filter((project) => project.type === "international")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Méthodologies de recherche</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-orange-100">
                      <BarChart className="h-5 w-5 text-ci-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold">Analyse quantitative</h3>
                      <p className="text-sm text-muted-foreground">
                        Utilisation de méthodes économétriques avancées pour analyser les données économiques et évaluer
                        l'impact des politiques.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-green-100">
                      <Users className="h-5 w-5 text-ci-green" />
                    </div>
                    <div>
                      <h3 className="font-bold">Analyse qualitative</h3>
                      <p className="text-sm text-muted-foreground">
                        Conduite d'entretiens, de groupes de discussion et d'études de cas pour comprendre les
                        dimensions sociales et institutionnelles des phénomènes économiques.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-orange-100">
                      <FileText className="h-5 w-5 text-ci-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold">Modélisation économique</h3>
                      <p className="text-sm text-muted-foreground">
                        Développement et application de modèles économiques pour simuler l'impact des politiques et
                        prévoir les tendances économiques.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-green-100">
                      <BarChart className="h-5 w-5 text-ci-green" />
                    </div>
                    <div>
                      <h3 className="font-bold">Évaluation d'impact</h3>
                      <p className="text-sm text-muted-foreground">
                        Utilisation de méthodes expérimentales et quasi-expérimentales pour évaluer rigoureusement
                        l'impact des programmes et politiques.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Partenaires de recherche</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {researchPartners.map((partner) => (
                    <div key={partner.id} className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-2">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium">{partner.name}</p>
                      <p className="text-xs text-muted-foreground">{partner.type}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/a-propos/references">
                    <Button variant="link" className="text-ci-green">
                      Voir tous nos partenaires
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 relative aspect-video md:aspect-square">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute top-2 right-2 bg-ci-orange text-white text-xs px-2 py-1 rounded-full">
            {project.type === "national" ? "National" : project.type === "regional" ? "Régional" : "International"}
          </div>
        </div>
        <div className="md:col-span-2 p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="font-medium">Durée:</span> {project.duration}
            </div>
            <div>
              <span className="font-medium">Financement:</span> {project.funding}
            </div>
            <div>
              <span className="font-medium">Partenaires:</span> {project.partners}
            </div>
            <div>
              <span className="font-medium">Chercheur principal:</span> {project.lead}
            </div>
          </div>
          <Link href={`/recherches/projets/${project.id}`}>
            <Button className="bg-ci-green hover:bg-green-700 text-white">
              Détails du projet
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

// Sample data
const researchAreas = [
  {
    id: "macroeconomie",
    title: "Macroéconomie et politiques publiques",
    description:
      "Analyse des politiques macroéconomiques, fiscales et monétaires et leur impact sur la croissance, l'emploi et la stabilité économique.",
    researchers: 8,
    image: "/placeholder.svg?text=Macroéconomie&height=200&width=400",
  },
  {
    id: "developpement",
    title: "Économie du développement",
    description:
      "Étude des facteurs et politiques favorisant le développement économique durable et inclusif en Côte d'Ivoire et en Afrique de l'Ouest.",
    researchers: 10,
    image: "/placeholder.svg?text=Développement&height=200&width=400",
  },
  {
    id: "agriculture",
    title: "Économie agricole et rurale",
    description:
      "Analyse des chaînes de valeur agricoles, des politiques de développement rural et de la sécurité alimentaire.",
    researchers: 6,
    image: "/placeholder.svg?text=Agriculture&height=200&width=400",
  },
  {
    id: "social",
    title: "Politiques sociales et inclusion",
    description:
      "Recherche sur les politiques d'éducation, de santé, de protection sociale et leur impact sur la réduction des inégalités.",
    researchers: 7,
    image: "/placeholder.svg?text=Politiques+Sociales&height=200&width=400",
  },
  {
    id: "integration",
    title: "Intégration régionale et commerce",
    description:
      "Étude des dynamiques d'intégration économique régionale, des politiques commerciales et de leurs effets sur les économies nationales.",
    researchers: 5,
    image: "/placeholder.svg?text=Intégration+Régionale&height=200&width=400",
  },
  {
    id: "finance",
    title: "Finance et inclusion financière",
    description:
      "Analyse du secteur financier, des politiques d'inclusion financière et de leur rôle dans le développement économique.",
    researchers: 6,
    image: "/placeholder.svg?text=Finance&height=200&width=400",
  },
]

const currentProjects = [
  {
    id: "p1",
    title: "Évaluation d'impact des politiques d'inclusion financière en zones rurales",
    description:
      "Ce projet vise à évaluer l'impact des différentes politiques d'inclusion financière sur l'accès aux services financiers et le bien-être économique des populations rurales en Côte d'Ivoire.",
    duration: "2022-2024",
    funding: "Banque Mondiale",
    partners: "Ministère de l'Économie et des Finances, BCEAO",
    lead: "Dr. Jean Touré",
    type: "national",
    image: "/placeholder.svg?text=Inclusion+Financière&height=300&width=400",
  },
  {
    id: "p2",
    title: "Analyse des chaînes de valeur agricoles et leur contribution à la croissance économique",
    description:
      "Cette recherche examine les chaînes de valeur des principales cultures d'exportation et vivrières en Côte d'Ivoire, identifiant les contraintes et opportunités pour améliorer leur contribution à la croissance économique.",
    duration: "2021-2023",
    funding: "FAO",
    partners: "Ministère de l'Agriculture, CNRA",
    lead: "Dr. Aminata Bamba",
    type: "national",
    image: "/placeholder.svg?text=Chaînes+Valeur+Agricoles&height=300&width=400",
  },
  {
    id: "p3",
    title: "Impact économique de la digitalisation des services publics",
    description:
      "Ce projet étudie l'impact économique et social de la digitalisation des services publics en Côte d'Ivoire, évaluant les gains d'efficacité, la réduction des coûts et l'amélioration de l'accès aux services.",
    duration: "2022-2023",
    funding: "PNUD",
    partners: "Ministère de la Modernisation de l'Administration",
    lead: "Dr. Olivier Kouamé",
    type: "national",
    image: "/placeholder.svg?text=Digitalisation+Services&height=300&width=400",
  },
  {
    id: "p4",
    title: "Intégration économique régionale et développement des chaînes de valeur en Afrique de l'Ouest",
    description:
      "Cette recherche analyse les opportunités et défis de l'intégration économique régionale pour le développement des chaînes de valeur en Afrique de l'Ouest, avec un focus sur les secteurs stratégiques.",
    duration: "2022-2024",
    funding: "Banque Africaine de Développement",
    partners: "CEDEAO, UEMOA",
    lead: "Dr. Paul Mensah",
    type: "regional",
    image: "/placeholder.svg?text=Intégration+Régionale&height=300&width=400",
  },
  {
    id: "p5",
    title: "Politiques d'adaptation au changement climatique dans le secteur agricole",
    description:
      "Ce projet évalue l'efficacité des différentes politiques d'adaptation au changement climatique dans le secteur agricole en Afrique de l'Ouest et leur impact sur la résilience des agriculteurs.",
    duration: "2021-2023",
    funding: "Union Européenne",
    partners: "CGIAR, Universités régionales",
    lead: "Dr. Lucie Osei",
    type: "regional",
    image: "/placeholder.svg?text=Adaptation+Climatique&height=300&width=400",
  },
  {
    id: "p6",
    title: "Évaluation comparative des systèmes de protection sociale en Afrique",
    description:
      "Cette recherche compare l'efficacité des différents modèles de protection sociale en Afrique et leur adaptabilité aux contextes socio-économiques variés, avec des études de cas dans plusieurs pays.",
    duration: "2022-2025",
    funding: "OIT, UNICEF",
    partners: "Universités africaines et européennes",
    lead: "Dr. Marie Koné",
    type: "international",
    image: "/placeholder.svg?text=Protection+Sociale&height=300&width=400",
  },
]

const researchPartners = [
  {
    id: "rp1",
    name: "Banque Mondiale",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=BM&height=100&width=100",
  },
  {
    id: "rp2",
    name: "Université Paris-Saclay",
    type: "Université",
    logo: "/placeholder.svg?text=UPS&height=100&width=100",
  },
  {
    id: "rp3",
    name: "BCEAO",
    type: "Institution financière",
    logo: "/placeholder.svg?text=BCEAO&height=100&width=100",
  },
  {
    id: "rp4",
    name: "FAO",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=FAO&height=100&width=100",
  },
  {
    id: "rp5",
    name: "AERC",
    type: "Centre de recherche",
    logo: "/placeholder.svg?text=AERC&height=100&width=100",
  },
  {
    id: "rp6",
    name: "PNUD",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=PNUD&height=100&width=100",
  },
]

