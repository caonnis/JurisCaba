"use client"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  Users,
  Shield,
  Building,
  Heart,
  Home,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Calendar,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedCounter } from "@/components/animated-counter"
import { WhatsappButton } from "@/components/whatsapp-button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Logo } from "@/components/logo" // Importar el componente Logo
import { MobileNav } from "@/components/mobile-nav" // Importar el nuevo componente MobileNav
import { ChevronDown, ChevronUp } from "lucide-react" // Asegúrate de que estos estén importados
import { RotatingText } from "@/components/rotating-text"

const services = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description: "Contratos, responsabilidad civil, daños y perjuicios",
    details:
      "Asesoramiento integral en contratos civiles, responsabilidad extracontractual, daños y perjuicios, sucesiones, y todo tipo de conflictos entre particulares. Contamos con amplia experiencia en negociación y litigio.",
    features: [
      "Redacción y revisión de contratos",
      "Reclamaciones por daños y perjuicios",
      "Gestión de sucesiones y herencias",
      "Asesoramiento en responsabilidad civil",
    ],
  },
  {
    icon: Shield,
    title: "Derecho Penal",
    description: "Defensa penal, querellas, recursos extraordinarios",
    details:
      "Defensa especializada en causas penales, desde delitos menores hasta casos complejos. Representación en todas las instancias judiciales, recursos de casación y extraordinarios ante la Corte Suprema.",
    features: [
      "Defensa en juicios penales",
      "Presentación de querellas",
      "Recursos de apelación y casación",
      "Asesoramiento en delitos económicos",
    ],
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description: "Despidos, accidentes de trabajo, negociaciones colectivas",
    details:
      "Asesoramiento a trabajadores y empresas en conflictos laborales, despidos, accidentes de trabajo, enfermedades profesionales, y negociación de convenios colectivos de trabajo.",
    features: [
      "Reclamos por despidos injustificados",
      "Indemnizaciones por accidentes laborales",
      "Negociación de convenios colectivos",
      "Asesoramiento en relaciones laborales",
    ],
  },
  {
    icon: Building,
    title: "Derecho Corporativo",
    description: "Mantenimiento, actualización y custodia de libros societarios",
    details:
      "Gestión societaria integral para que nuestros clientes cumplan con todas las obligaciones societarias frente al organismo de control y puedan ocuparse únicamente de su giro comercial.",
    features: [
      "Constitución de sociedades",
      "Registración de sociedades extranjeras",
      "Confección de Actas, copiado y custodia de libros societarios",
      "Trámites Registrales en general frente a IGJ",
    ],
  },
  {
    icon: Heart,
    title: "Derecho de Familia",
    description: "Divorcios, régimen de visitas, alimentos",
    details:
      "Asesoramiento en divorcios consensuados y contenciosos, régimen de comunicación con hijos menores, cuota alimentaria, violencia familiar, y adopciones. Priorizamos soluciones amigables.",
    features: [
      "Divorcios y separaciones",
      "Régimen de visitas y tenencia",
      "Cuota alimentaria y compensatoria",
      "Adopciones y filiación",
    ],
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description: "Compraventa, locaciones, consorcio, usucapión",
    details:
      "Asesoramiento en compraventa de inmuebles, contratos de locación, administración de consorcios, usucapión, subdivisiones, y todo tipo de operaciones inmobiliarias.",
    features: [
      "Contratos de compraventa y alquiler",
      "Asesoramiento en consorcios",
      "Juicios de usucapión",
      "Estudios de títulos",
    ],
  },
]

function ServiceCard({
  service,
  index,
  isActive,
  onClick,
}: {
  service: (typeof services)[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const Icon = service.icon
  const ChevronIcon = isActive ? ChevronUp : ChevronDown

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 ${
        isActive ? "shadow-2xl ring-2 ring-blue-500 ring-opacity-20" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader className="p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div
            className={`p-4 rounded-2xl transition-all duration-300 ${
              isActive ? "bg-gradient-to-br from-blue-100 to-blue-200" : "bg-gradient-to-br from-slate-100 to-slate-200"
            }`}
          >
            <Icon className="h-8 w-8 text-slate-700" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
            <CardDescription className="text-sm text-slate-600 leading-relaxed">{service.description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CardContent className="px-6 pb-6 space-y-6">
          <div className="border-t border-slate-200 pt-6">
            <h4 className="font-semibold text-slate-900 text-base mb-3">Aspectos clave que cubrimos:</h4>
            <div className="grid grid-cols-1 gap-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <h4 className="font-semibold text-slate-900 text-base mb-3">Detalles del Servicio:</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{service.details}</p>
          </div>
          <Button
            className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base py-3"
            onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Consulta
          </Button>
        </CardContent>
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center space-x-1 text-xs text-slate-500 transition-all duration-300 ${
              !isActive ? "animate-bounce" : ""
            }`}
          >
            <ChevronIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function JurisCabaLanding() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const { ref: heroRef, isInView: heroInView } = useScrollAnimation<HTMLElement>(0.2)
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation<HTMLElement>(0.1)

  const rotatingStatsData = [
    {
      id: "cases",
      value: <AnimatedCounter from={0} to={500} duration={2000} suffix="+" />,
      label: "Casos exitosos",
    },
    {
      id: "experience",
      value: "15+",
      label: "Años de experiencia",
    },
    {
      id: "urgency",
      value: "24/7",
      label: "Atención urgencias",
    },
  ]

  const rotatingHeroTexts = [
    { icon: Award, text: "15+ años de experiencia legal" },
    { icon: CheckCircle, text: "500+ casos exitosos" },
    { icon: Clock, text: "Atención 24/7 para urgencias" },
  ]
  const rotatingServiceTexts = [
    "Despidos",
    "Contratos",
    "Querellas",
    "Divorcios",
    "Sucesiones",
    "Compraventa",
    "Concursos y quiebras",
    "Accidentes de trabajo",
    "Mediaciones",
    "Litigios",
    "Asesoramiento legal",
    "Derecho de familia",
    "Derecho penal",
    "Derecho civil",
    "Derecho laboral",
    "Derecho comercial",
    "Derecho inmobiliario",
    "Propiedad horizontal",
    "Usucapión",
    "Alimentos",
    "Régimen de visitas",
    "Violencia familiar",
    "Adopciones",
    "Delitos económicos",
    "Recursos extraordinarios",
    "Negociaciones colectivas",
    "y mucho más.....",
  ]
  const [currentHeroTextIndex, setCurrentHeroTextIndex] = useState(0)
  const [isHeroTextFading, setIsHeroTextFading] = useState(false) // Nuevo estado para el texto del héroe

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHeroTextFading(true) // Inicia el desvanecimiento
      setTimeout(() => {
        setCurrentHeroTextIndex((prevIndex) => (prevIndex + 1) % rotatingHeroTexts.length)
        setIsHeroTextFading(false) // Termina el desvanecimiento, inicia la aparición
      }, 300) // Duración del desvanecimiento
    }, 3000) // Cambia el texto cada 3 segundos

    return () => clearInterval(interval)
  }, [rotatingHeroTexts.length])

  const CurrentHeroIcon = rotatingHeroTexts[currentHeroTextIndex].icon
  const currentHeroText = rotatingHeroTexts[currentHeroTextIndex].text

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Logo /> {/* Usar el componente Logo */}
          <nav className="hidden md:flex items-center space-x-8">
            {" "}
            {/* Navegación de escritorio */}
            <Link href="#servicios" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#consulta" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Consulta
            </Link>
            <Link href="#contacto" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium"
              onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
            >
              Agendar Consulta
            </Button>
          </nav>
          <MobileNav /> {/* Menú de hamburguesa para móvil */}
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white transition-opacity duration-700 ${
          heroInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Modificado el badge del héroe para usar la nueva lógica de animación */}
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium overflow-hidden relative h-8">
                  <CurrentHeroIcon className="h-4 w-4 flex-shrink-0" />
                  <span
                    className={cn("transition-opacity duration-300", isHeroTextFading ? "opacity-0" : "opacity-100")}
                  >
                    {currentHeroText}
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                  Defendemos tus
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent block">
                    derechos
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Estudio jurídico especializado en brindar soluciones legales integrales en la Ciudad Autónoma de
                  Buenos Aires.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Link href="#servicios" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-medium bg-transparent transition-colors duration-300"
                  >
                    Conocer Servicios
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-blue-600">
                  <AnimatedCounter from={0} to={500} duration={2000} suffix="+" />
                </div>
                <div className="text-slate-600 font-medium">Casos exitosos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-slate-600 font-medium">Años de experiencia</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-slate-600 font-medium">Atención urgencias</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Respuesta en 24hs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Confidencialidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        ref={servicesRef}
        className={`py-24 bg-white transition-opacity duration-700 ${
          servicesInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-20">
            <RotatingText texts={rotatingServiceTexts} /> {/* Usando el componente RotatingText */}
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 tracking-tight">Áreas de práctica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hacé click en cada servicio para conocer más detalles sobre cómo podemos ayudarte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isActive={activeService === index}
                onClick={() => setActiveService(activeService === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="consulta"
        ref={ctaRef}
        className={`py-24 bg-gradient-to-br from-slate-900 to-slate-800 transition-opacity duration-700 ${
          ctaInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 tracking-tight">
                ¿Necesitás asesoramiento legal?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Agendá una consulta con nuestros especialistas. Evaluamos tu caso sin compromiso y te brindamos la mejor
                estrategia legal.
              </p>
            </div>

            <div className="space-y-8">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
              >
                <Calendar className="h-6 w-6 mr-3" />
                Agendar Consulta
              </Button>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Consulta de 30 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Presencial o virtual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        ref={footerRef}
        className={`bg-slate-50 py-20 transition-opacity duration-700 ${
          footerInView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start justify-items-center text-center lg:text-left">
            <div className="space-y-6 lg:col-span-1">
              <div className="flex justify-center lg:justify-start">
                <Logo />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg max-w-sm lg:max-w-none">
                Estudio jurídico especializado en brindar soluciones legales integrales en la Ciudad Autónoma de Buenos
                Aires. Tu tranquilidad es nuestra prioridad.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-bold text-slate-900">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <Link
                    href="https://wa.me/5491161179711"
                    className="group p-3 bg-slate-50 rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                  >
                    <Phone className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />{" "}
                    {/* Usar Phone de Lucide para WhatsApp */}
                  </Link>
                  <Link
                    href="https://instagram.com/juriscaba"
                    className="group p-3 bg-slate-50 rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                  >
                    <Instagram className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/juris-caba/"
                    className="group p-3 bg-slate-50 rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />
                  </Link>
                  <Link
                    href="mailto:info@juriscaba.com.ar"
                    className="group p-3 bg-slate-50 rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />
                  </Link>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-slate-700" />
                  </div>
                  <span className="text-slate-700 font-medium">Ciudad de Buenos Aires</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-bold text-slate-900">Información General</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Clock className="h-5 w-5 text-slate-700" />
                  <span>Lunes a Viernes: 9:00 - 18:00 hs</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-slate-700" />
                  <span>+54 11 6117-9711</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-slate-700" />
                  <span>info@juriscaba.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-16 pt-8 text-center text-slate-500 text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <p>&copy; {new Date().getFullYear()} Juris Caba. Todos los derechos reservados.</p>
            <div className="hidden sm:block">|</div>
            <Link href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              Términos y Condiciones
            </Link>
            <div className="hidden sm:block">|</div>
            <Link href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </footer>

      <WhatsappButton />
    </div>
  )
}
