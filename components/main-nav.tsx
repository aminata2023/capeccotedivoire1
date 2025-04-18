"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import { navItems } from "./navItems"

export function MainNav() {
  const pathname = usePathname()
  const [hoverItem, setHoverItem] = useState<string | null>(null)

  return (
    <header className="w-full bg-green-800">
      <div className="flex items-center justify-between min-h-[64px] px-6 w-full">
        {/* Logo + Titre */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-14 bg-white rounded-sm flex items-center justify-center overflow-hidden mr-3">
              <Image
                src="/images/logocapec.png"
                alt="CAPEC Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-xl">CAPEC</span>
          </Link>
        </div>

        {/* Navigation principale */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-1 w-full justify-evenly">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <div key={item.title} className="relative group"
                  onMouseEnter={() => setHoverItem(item.title)}
                  onMouseLeave={() => setHoverItem(null)}>

                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-1 text-xs font-medium text-white uppercase hover:text-ci-orange transition-colors",
                      isActive && "text-ci-orange"
                    )}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="ml-1 h-3 w-3 inline" />}
                  </Link>

                  {item.submenu && (
                    <div className={cn(
                      "absolute left-0 top-full pt-1 z-50 w-56",
                      hoverItem === item.title ? "block" : "hidden group-hover:block"
                    )}>
                      <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-ci-green hover:text-white transition-colors",
                              pathname === subItem.href && "bg-ci-green text-white"
                            )}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>

        {/* Contact info */}
        <div className="hidden md:flex items-center space-x-4 text-sm text-white shrink-0">
          <span className="text-gray-400">|</span>
          <span>Contact: (225) 27 22 44 41 24</span>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-white p-2">
        <div className="w-6 flex flex-col space-y-1">
          <span className={`h-0.5 bg-current transition ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 bg-current transition ${open ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-0.5 bg-current transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-2">
          <div className="border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-900">
            Menu CAPEC
          </div>
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                      className="flex w-full justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.title}
                      <ChevronRight className={`h-4 w-4 transition-transform ${openSubmenu === item.title ? 'rotate-90' : ''}`} />
                    </button>
                    {openSubmenu === item.title && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100 px-4 py-3 text-sm text-gray-700">
              <div>Email: infos@capec-ci.org</div>
              <div>Contact: (225) 27 22 44 41 24</div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
