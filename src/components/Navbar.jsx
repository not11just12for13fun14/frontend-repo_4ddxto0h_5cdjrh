import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">BJ</div>
            <div>
              <p className="text-lg font-bold text-green-700 leading-tight">BJ Medical Center</p>
              <p className="text-xs text-gray-500 -mt-1">Private Community Hospital – Greater Accra, Ghana</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm transition-colors">
              <Phone size={16} /> Call Us
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-green-200 text-green-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-green-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-semibold text-white bg-green-600 hover:bg-green-700 inline-flex items-center gap-2">
                <Phone size={16} /> Call Us
              </a>
              <div className="px-3 py-2 text-xs text-gray-500 flex items-center gap-2">
                <MapPin size={14} /> Greater Accra, Ghana
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
