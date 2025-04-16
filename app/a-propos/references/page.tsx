import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ReferencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quelques Références</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos partenaires et collaborateurs qui nous font confiance pour nos expertises en analyse
            économique et en recherche appliquée.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Institutions nationales</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nationalInstitutions.map((institution) => (
              <ReferenceCard key={institution.id} reference={institution} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Organisations internationales</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {internationalOrganizations.map((organization) => (
              <ReferenceCard key={organization.id} reference={organization} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Universités et centres de recherche</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {academicInstitutions.map((institution) => (
              <ReferenceCard key={institution.id} reference={institution} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Secteur privé</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {privateCompanies.map((company) => (
              <ReferenceCard key={company.id} reference={company} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Témoignages</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?text=JD&height=64&width=64"
                      alt="Jean Dupont"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Le CAPEC a fourni une analyse économique rigoureuse qui a été essentielle pour la formulation de
                      notre politique agricole. Leur expertise et leur professionnalisme sont remarquables."
                    </p>
                    <p className="font-bold">Jean Dupont</p>
                    <p className="text-sm text-muted-foreground">Directeur, Ministère de l'Agriculture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?text=SK&height=64&width=64"
                      alt="Sarah Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Notre collaboration avec le CAPEC sur l'évaluation d'impact de nos programmes a été extrêmement
                      fructueuse. Leur approche méthodologique rigoureuse a permis d'obtenir des résultats fiables."
                    </p>
                    <p className="font-bold">Sarah Konaté</p>
                    <p className="text-sm text-muted-foreground">Coordinatrice de programmes, PNUD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?text=MT&height=64&width=64"
                      alt="Mohamed Touré"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Le CAPEC est un partenaire de recherche de premier plan. Leur expertise en économie du
                      développement et leur connaissance approfondie du contexte local font d'eux un collaborateur
                      précieux."
                    </p>
                    <p className="font-bold">Mohamed Touré</p>
                    <p className="text-sm text-muted-foreground">Professeur, Université de Paris-Saclay</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?text=AS&height=64&width=64"
                      alt="Aminata Sylla"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Les analyses sectorielles réalisées par le CAPEC ont été déterminantes pour notre stratégie
                      d'investissement en Côte d'Ivoire. Leur compréhension des dynamiques économiques locales est
                      inégalée."
                    </p>
                    <p className="font-bold">Aminata Sylla</p>
                    <p className="text-sm text-muted-foreground">Directrice des investissements, Banque Africaine</p>
                  </div>
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

function ReferenceCard({ reference }: { reference: { id: string; name: string; type: string; logo?: string } }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-4">
        <Image src={reference.logo || "/placeholder.svg"} alt={reference.name} fill className="object-contain" />
      </div>
      <h3 className="font-medium text-sm">{reference.name}</h3>
      <p className="text-xs text-muted-foreground">{reference.type}</p>
    </div>
  )
}

// Sample data
const nationalInstitutions = [
  {
    id: "ni1",
    name: "Ministère de l'Économie et des Finances",
    type: "Institution gouvernementale",
    logo: "/placeholder.svg?text=MEF&height=100&width=100",
  },
  {
    id: "ni2",
    name: "Ministère du Plan et du Développement",
    type: "Institution gouvernementale",
    logo: "/placeholder.svg?text=MPD&height=100&width=100",
  },
  {
    id: "ni3",
    name: "Institut National de la Statistique",
    type: "Institution gouvernementale",
    logo: "/placeholder.svg?text=INS&height=100&width=100",
  },
  {
    id: "ni4",
    name: "Banque Centrale des États de l'Afrique de l'Ouest",
    type: "Institution financière",
    logo: "/placeholder.svg?text=BCEAO&height=100&width=100",
  },
  {
    id: "ni5",
    name: "Chambre de Commerce et d'Industrie",
    type: "Institution économique",
    logo: "/placeholder.svg?text=CCI&height=100&width=100",
  },
  {
    id: "ni6",
    name: "Conseil National de Politique Économique",
    type: "Institution gouvernementale",
    logo: "/placeholder.svg?text=CNPE&height=100&width=100",
  },
  {
    id: "ni7",
    name: "Agence de Promotion des Investissements",
    type: "Institution économique",
    logo: "/placeholder.svg?text=API&height=100&width=100",
  },
  {
    id: "ni8",
    name: "Conseil Café-Cacao",
    type: "Institution sectorielle",
    logo: "/placeholder.svg?text=CCC&height=100&width=100",
  },
]

const internationalOrganizations = [
  {
    id: "io1",
    name: "Banque Mondiale",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=BM&height=100&width=100",
  },
  {
    id: "io2",
    name: "Fonds Monétaire International",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=FMI&height=100&width=100",
  },
  {
    id: "io3",
    name: "Programme des Nations Unies pour le Développement",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=PNUD&height=100&width=100",
  },
  {
    id: "io4",
    name: "Banque Africaine de Développement",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=BAD&height=100&width=100",
  },
  {
    id: "io5",
    name: "Union Européenne",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=UE&height=100&width=100",
  },
  {
    id: "io6",
    name: "Organisation Internationale du Travail",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=OIT&height=100&width=100",
  },
  {
    id: "io7",
    name: "Agence Française de Développement",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=AFD&height=100&width=100",
  },
  {
    id: "io8",
    name: "UNICEF",
    type: "Organisation internationale",
    logo: "/placeholder.svg?text=UNICEF&height=100&width=100",
  },
]

const academicInstitutions = [
  {
    id: "ai1",
    name: "Université Félix Houphouët-Boigny",
    type: "Université",
    logo: "/placeholder.svg?text=UFHB&height=100&width=100",
  },
  {
    id: "ai2",
    name: "Université de Paris-Saclay",
    type: "Université",
    logo: "/placeholder.svg?text=UPS&height=100&width=100",
  },
  {
    id: "ai3",
    name: "Harvard University",
    type: "Université",
    logo: "/placeholder.svg?text=HU&height=100&width=100",
  },
  {
    id: "ai4",
    name: "London School of Economics",
    type: "Université",
    logo: "/placeholder.svg?text=LSE&height=100&width=100",
  },
  {
    id: "ai5",
    name: "Centre de Recherche pour le Développement International",
    type: "Centre de recherche",
    logo: "/placeholder.svg?text=CRDI&height=100&width=100",
  },
  {
    id: "ai6",
    name: "Institut de Recherche pour le Développement",
    type: "Centre de recherche",
    logo: "/placeholder.svg?text=IRD&height=100&width=100",
  },
  {
    id: "ai7",
    name: "African Economic Research Consortium",
    type: "Centre de recherche",
    logo: "/placeholder.svg?text=AERC&height=100&width=100",
  },
  {
    id: "ai8",
    name: "Centre d'Études et de Recherches sur le Développement International",
    type: "Centre de recherche",
    logo: "/placeholder.svg?text=CERDI&height=100&width=100",
  },
]

const privateCompanies = [
  {
    id: "pc1",
    name: "Orange Côte d'Ivoire",
    type: "Télécommunications",
    logo: "/placeholder.svg?text=Orange&height=100&width=100",
  },
  {
    id: "pc2",
    name: "Société Générale",
    type: "Banque",
    logo: "/placeholder.svg?text=SG&height=100&width=100",
  },
  {
    id: "pc3",
    name: "Nestlé Côte d'Ivoire",
    type: "Agroalimentaire",
    logo: "/placeholder.svg?text=Nestlé&height=100&width=100",
  },
  {
    id: "pc4",
    name: "Total Énergies",
    type: "Énergie",
    logo: "/placeholder.svg?text=Total&height=100&width=100",
  },
  {
    id: "pc5",
    name: "MTN Côte d'Ivoire",
    type: "Télécommunications",
    logo: "/placeholder.svg?text=MTN&height=100&width=100",
  },
  {
    id: "pc6",
    name: "SIFCA Group",
    type: "Agro-industrie",
    logo: "/placeholder.svg?text=SIFCA&height=100&width=100",
  },
  {
    id: "pc7",
    name: "Bolloré Transport & Logistics",
    type: "Logistique",
    logo: "/placeholder.svg?text=Bolloré&height=100&width=100",
  },
  {
    id: "pc8",
    name: "Ecobank",
    type: "Banque",
    logo: "/placeholder.svg?text=Ecobank&height=100&width=100",
  },
]

