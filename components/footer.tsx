import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
  <>
    <footer className="w-full bg-black text-white py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logocapec.png"
              alt="Logo du CAPEC"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="font-bold text-ci-orange">CAPEC</span>
          </Link>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} CAPEC - Cellule d'Analyse de Politiques Économiques du CIRES. Tous droits
            réservés.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/mentions-legales" className="text-sm text-gray-400 hover:text-ci-orange transition-colors">
            Mentions légales
          </Link>
          <Link
            href="/politique-confidentialite"
            className="text-sm text-gray-400 hover:text-ci-orange transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  
  </>
  )
}

