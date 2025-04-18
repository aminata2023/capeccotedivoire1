import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function OrganigrammePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Organigramme</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez la structure organisationnelle du CAPEC et les différentes équipes qui composent notre centre de
            recherche.
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Structure organisationnelle du CAPEC</h2>

            {/* Organigramme visuel */}
            <div className="relative w-full h-[600px] mb-8 hidden md:block">
              <Image
                src="/placeholder.svg?text=Organigramme+du+CAPEC&height=600&width=1000"
                alt="Organigramme du CAPEC"
                fill
                className="object-contain"
              />
            </div>

            {/* Version mobile de l'organigramme */}
            <div className="space-y-6 md:hidden">
               {/*<div className="bg-ci-orange text-white p-4 rounded-lg text-center">
                <h3 className="font-bold">Direction</h3>
                <p>Dr. Amadou aminata - Directeur</p>
                <p>Dr. Marie Koné - Directrice Adjointe</p>
              </div>

               <div className="grid grid-cols-2 gap-4">
                <div className="bg-ci-green text-white p-4 rounded-lg text-center">
                  <h3 className="font-bold">Administration</h3>
                  <p>Gestion administrative</p>
                  <p>Finances</p>
                </div>
                <div className="bg-ci-green text-white p-4 rounded-lg text-center">
                  <h3 className="font-bold">Communication</h3>
                  <p>Relations publiques</p>
                  <p>Publications</p>
                </div>
              </div>

             <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Macroéconomie</h3>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Développement</h3>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Politiques Sociales</h3>
                </div>
              </div>*/} 
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Équipe DE PILOTAGE</h3>
              <p className="text-muted-foreground mb-4">
                
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr YEO Nahoua, Directeur de Cabinet du Ministère du Plan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Honorable DIABAGATE MAmah, Commission des Affaires Economiques et Financières de l’Assemblée Nationale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr ABOUA Gustave, Conseiller Economique, Social, Environnemental et Culturel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. TRA BI EMMANUEL, Membre de la Commission des Affaires Economiques et Financières (Assemblée Nationale)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BALLO ZIE, Président de l'UFHB de Cocody</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BAMBA N'Galadjo, Conseiller Ministère de l'Economie et des Finances (MEF)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. ADOPO Fiacre, Directeur des Politiques et Synthèses Budgétaires (DGBF)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. NIANGO Guy, Secrétaire du BNETD Représentant le Dg du BNETD</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr DIARRA Ibrahim, Directeur du CIRES</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* equipe de recherche*/}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">EQUIPE DE DIRECTION</h3>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>Dr. AHOURE Alban Alphonse Emmanuel</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">EQUIPE DE RECHERCHE</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. AHOURE Alban A.E</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. KIMOU Assi José Carlos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KRAMO Kouakou Germain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BEKE EHUITCHE TITE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr TRAORE NOHOUA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr BECHO ISABELLE EPSE N'DRI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KOUADIO BONIFACE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KACOU KACOU YVES THIERRY</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr TOURE TALNAN</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr ASSOUM FEISSAL</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">PERSONNEL D'APPUIS</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>M. DRAMANE Diarassouba, Consultant à la Comptabilité</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>KOUKA Mayane YAPO, Chargée de Communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>KADJO Balémy Tatiana, Assistante Administrative</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>Mme NEUBA Augusta épse GOUEDAN, Assistante Administrative chargée de la Recherche</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>M. BELIA Dakouri Jean-Paul, Chauffeur-coursier</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-green"></div>
                  <span>YAOUA Antoinette, Technicienne de surface</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

