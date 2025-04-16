import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ChercheurPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Chercheurs</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez l'équipe de chercheurs du CAPEC, leurs domaines d'expertise et leurs publications.
          </p>
        </div>

        <div className="mt-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input placeholder="Rechercher un chercheur par nom ou domaine d'expertise..." className="pl-10 max-w-xl" />
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tous les chercheurs</TabsTrigger>
            <TabsTrigger value="senior">COMITE DE PILOTAGE</TabsTrigger>
            <TabsTrigger value="junior">DIRECTEUR</TabsTrigger>
            <TabsTrigger value="associes">EQUIPE DE RECHERCHE</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="senior" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="junior" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {juniorResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="associes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {associateResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ResearcherCard({ researcher }  : { researcher: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 my-4 md:my-0 md:ml-4">
          <Image
            src={researcher.photo || "/placeholder.svg"}
            alt={researcher.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-lg">{researcher.name}</h3>
          <p className="text-ci-orange text-sm">{researcher.title}</p>
          <div className="mt-2 space-y-2">
            <p className="text-sm text-muted-foreground line-clamp-2">{researcher.bio}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {researcher.expertise.map((exp: string, index: number) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {exp}
                </span>
                ))}
            </div>
            <div className="mt-4">
              <Link href={`/chercheur/${researcher.id}`}>
                <Button variant="link" className="p-0 h-auto text-ci-green">
                  Voir le profil
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

// Sample data
const seniorResearchers = [
  {
    id: "1",
    name: "Dr. YEO Nahoua",
    title: "Directeur de Cabinet du Ministère du Plan",
    bio: "Docteur en économie avec plus de 20 ans d'expérience dans l'analyse des politiques économiques et le développement durable.",
    expertise: ["Macroéconomie", "Politiques publiques", "Développement durable"],
    //photo: "/images/drnahouyeao.jpg"
    photo: "/images/drnahouyeao.jpg?t&height=300&width=1200",
  },
  {
    id: "2",
    name: "Honorable DIABAGATE MAmah",
    title: " Commission des Affaires Economiques et Financières de l’Assemblée Nationale",
    bio: "Spécialiste en macroéconomie et développement durable, ancienne conseillère ministérielle avec une expertise en économie du genre.",
    expertise: ["Économie du genre", "Développement durable", "Politiques sociales"],
    photo: "/images/drnahouyeao.jpg?text=Dr.+Marie+Koné&height=300&width=300",
  },
  {
    id: "3",
    name: "Dr ABOUA Gustave",
    title: "Conseiller Economique, Social, Environnemental et Culturel",
    bio: "Expert en économie du développement avec un focus sur les politiques d'inclusion financière et la réduction de la pauvreté.",
    expertise: ["Inclusion financière", "Réduction de la pauvreté", "Microfinance"],
    photo: "/placeholder.svg?text=Dr.+Jean+Touré&height=300&width=300",
  },
  {
    id: "4",
    name: "M. TRA BI EMMANUEL",
    title: "Membre de la Commission des Affaires Economiques et Financières (Assemblée Nationale)",
    bio: "Spécialiste des questions de genre et d'économie sociale, docteure de l'Université de Paris avec une expertise en évaluation d'impact.",
    expertise: ["Économie sociale", "Évaluation d'impact", "Politiques de genre"],
    photo: "/placeholder.svg?text=Dr.+Fatou+Sow&height=300&width=300",
  },
  {
    id: "5",
    name: "Prof. BALLO ZIE",
    title: " Président de l’UFHB de Cocody",
    bio: "Économiste spécialisé dans l'analyse des politiques commerciales et l'intégration régionale en Afrique de l'Ouest.",
    expertise: ["Commerce international", "Intégration régionale", "Économétrie"],
    photo: "/placeholder.svg?text=Dr.+Paul+Mensah&height=300&width=300",
  },
  {
    id: "6",
    name: "Prof. BAMBA N’Galadjo",
    title: "Conseiller Ministère de l’Economie et des Finances (MEF) ",
    bio: "Spécialiste en économie agricole et développement rural, avec un intérêt particulier pour les chaînes de valeur agricoles.",
    expertise: ["Économie agricole", "Développement rural", "Chaînes de valeur"],
    photo: "/placeholder.svg?text=Dr.+Aminata+Bamba&height=300&width=300",
  },
  {
    id: "7",
    name: "M. ADOPO Fiacre",
    title: "Directeur des Politiques et Synthèses Budgétaires (DGBF)",
    bio: "Expert en économie de l'éducation et formation professionnelle, avec une expérience dans l'évaluation des politiques éducatives.",
    expertise: ["Économie de l'éducation", "Capital humain", "Marché du travail"],
    photo: "/placeholder.svg?text=Dr.+Olivier+Kouamé&height=300&width=300",
  },
  {
    id: "8",
    name: "M. NIANGO Guy",
    title: "Secrétaire du BNETD Représentant le Dg du BNETD",
    bio: "Professeure d'économie à l'Université de Stanford, spécialiste en économie du développement et collaboratrice régulière du CAPEC.",
    expertise: ["Économie du développement", "Pauvreté", "Méthodes expérimentales"],
    photo: "/placeholder.svg?text=Prof.+Sarah+Johnson&height=300&width=300",
  },
  {
    id: "9",
    name: "Dr DIARRA Ibrahim",
    title: "Directeur du CIRES",
    bio: "Économiste à la Banque Mondiale, collabore avec le CAPEC sur des projets liés aux politiques de développement en Afrique.",
    expertise: ["Politiques de développement", "Finance internationale", "Gouvernance"],
    photo: "/placeholder.svg?text=Dr.+Mohamed+Sylla&height=300&width=300",
  },
]

const juniorResearchers = [
  {
    id: "10",
    name: "Prof. AHOURE Alban A.E",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
]

const associateResearchers = [
  {
    id: "11",
    name: "Prof. AHOURE Alban A.E",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "12",
    name: "Prof. KIMOU Assi José Carlos",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "13",
    name: "Dr KRAMO Kouakou Germain",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "14",
    name: "Prof. BEKE EHUITCHE TITE",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "15",
    name: "Dr TRAORE NOHOUA",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "16",
    name: "Dr BECHO ISABELLE EPSE N’DRI",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "17",
    name: "Dr KOUADIO BONIFACE",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "18",
    name: "Dr KACOU KACOU YVES THIERRY",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
  {
    id: "19",
    name: "Dr TOURE TALNAN",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  }, 
  {
    id: "20",
    name: "Dr ASSOUM FEISSAL",
    title: "DIRECTEUR",
    bio: "Économiste environnementale, travaille sur les questions de changement climatique et d'économie verte en collaboration avec le CAPEC.",
    expertise: ["Économie environnementale", "Changement climatique", "Économie verte"],
    photo: "/placeholder.svg?text=Dr.+Lucie+Osei&height=300&width=300",
  },
]





const allResearchers = [...seniorResearchers, ...juniorResearchers, ...associateResearchers]

