"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo" // Importar el componente Logo

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] p-4">
        <div className="flex flex-col items-start gap-6 pt-6">
          <Logo /> {/* Usar el componente Logo */}
          <nav className="flex flex-col gap-4 w-full">
            <Link
              href="#servicios"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#consulta"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Consulta
            </Link>
            <Link
              href="#contacto"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium text-lg mt-4 w-full"
              onClick={() => {
                window.open("https://koalendar.com/e/juriscaba", "_blank")
                setIsOpen(false)
              }}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Consulta
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
