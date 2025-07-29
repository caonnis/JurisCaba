import { Scale } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3">
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
    </Link>
  )
}
