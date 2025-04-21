import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          {/* Bloc logo et description */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logocapec.png"
                alt="Logo du CAPEC"
                width={100}
                height={100}
              />
              <span className="text-xl font-semibold text-ci-orange">CAPEC</span>
            </Link>
            <p className="text-sm text-gray-400">
              La Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC) produit des analyses pour appuyer la prise de décision en matière de développement en Côte d’Ivoire.
            </p>
          </div>

          {/* Bloc newsletter */}
          <div className="md:w-1/3">
            <h3 className="text-sm font-bold uppercase mb-2">Abonnez-vous à notre infolettre</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-ci-orange w-full"
              />
              <button
                type="submit"
                className="bg-ci-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>

          {/* Bloc liens */}
          <div className="flex flex-col gap-2 text-sm text-gray-400 md:w-1/3">
            <Link href="/activites/rapport" className="hover:text-white">
              Nos réalisations
            </Link>
            <Link href="/ressources/recherches" className="hover:text-white">
              Recherche
            </Link>
            <Link href="/medias/videotheque" className="hover:text-white">
              Nos vidéos
            </Link>
            <Link href="/" className="hover:text-white">
              Plan du site
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} CAPEC - CIRES. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
