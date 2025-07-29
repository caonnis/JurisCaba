"use client"

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
  Calendar,
  Award,
  Clock,
  PhoneIcon as Whatsapp,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { AnimatedCounter } from "@/components/animated-counter"
import { WhatsappButton } from "@/components/whatsapp-button" // Importar el botón de WhatsApp
import { useScrollAnimation } from "@/hooks/use-scroll-animation" // Importar el hook de animación

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
    title: "Derecho Comercial",
    description: "Sociedades, contratos comerciales, concursos y quiebras",
    details:
      "Constitución y reestructuración de sociedades, contratos comerciales, fusiones y adquisiciones, procesos concursales, y asesoramiento integral para empresas de todos los tamaños.",
    features: [
      "Constitución y disolución de sociedades",
      "Redacción de contratos comerciales",
      "Asesoramiento en fusiones y adquisiciones",
      "Gestión de concursos y quiebras",
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
  // Selecciona el icono de chevron según el estado de la tarjeta
  const ChevronIcon = isActive ? ChevronUp : ChevronDown

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1 ${
        isActive ? "shadow-2xl ring-2 ring-blue-500 ring-opacity-20" : ""
      }`}
      onClick={onClick} // Toda la tarjeta es clickeable para expandir/colapsar
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

      {/* Contenido expandible */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0" // Aumentado max-h para que el botón sea visible
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

      {/* Indicador de expansión (siempre visible) */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center space-x-1 text-xs text-slate-500 transition-all duration-300 ${
              !isActive ? "animate-bounce" : "" // Animación solo cuando está cerrado
            }`}
          >
            <ChevronIcon className="h-4 w-4" /> {/* Usamos el icono Chevron dinámico */}
          </div>
        </div>
      </div>
    </Card>
  )
}

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
          <Scale className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-slate-900 leading-none">Juris</span>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider leading-none">CABA</span>
      </div>
    </div>
  )
}

export default function JurisCabaLanding() {
  // `activeService` gestiona qué tarjeta está abierta. Solo una puede estar activa a la vez.
  const [activeService, setActiveService] = useState<number | null>(null)

  // Hooks para animaciones al scroll
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation<HTMLElement>(0.2)
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation<HTMLElement>(0.1)
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation<HTMLElement>(0.1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#consulta" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Consulta
            </Link>
            <Link href="#contacto" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contacto
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium"
              onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
            >
              Agendar Consulta
            </Button>
          </nav>
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
            {/* Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  <span>15+ años de experiencia legal</span>
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://koalendar.com/e/juriscaba", "_blank")}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Link href="#servicios" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-medium bg-transparent"
                  >
                    Conocer Servicios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
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
                <div className="text-4xl font-bold text-blue-600 animate-blink">24/7</div>
                <div className="text-slate-600 font-medium">Atención urgencias</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
              {/* Eliminado "Primera consulta gratuita" */}
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
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
              <Scale className="h-4 w-4" />
              <span>Nuestras especialidades</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Áreas de práctica</h2>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
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
            {/* Logo and Description */}
            <div className="space-y-6 lg:col-span-1">
              <div className="flex justify-center lg:justify-start">
                <Logo />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg max-w-sm lg:max-w-none">
                Estudio jurídico especializado en brindar soluciones legales integrales en la Ciudad Autónoma de Buenos
                Aires. Tu tranquilidad es nuestra prioridad.
              </p>
            </div>

            {/* Contacto */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-xl font-bold text-slate-900">Contacto</h3>
              <div className="space-y-4">
                {/* Iconos de contacto horizontales */}
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <Link
                    href="https://wa.me/5491112345678"
                    className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 text-slate-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                  >
                    <Whatsapp className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://instagram.com/juriscaba"
                    className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 text-slate-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:info@juriscaba.com.ar"
                    className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 text-slate-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>

                {/* Ubicación */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-slate-700" />
                  </div>
                  <span className="text-slate-700 font-medium">Ciudad de Buenos Aires</span>
                </div>
              </div>
            </div>

            {/* Información General / Horarios */}
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

      {/* Botón flotante de WhatsApp */}
      <WhatsappButton />
    </div>
  )
}
