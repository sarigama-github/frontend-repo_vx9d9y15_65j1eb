import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/20 bg-white/70">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center font-bold">VP</div>
          <span className="font-semibold text-gray-900">Virtual Pharmacist</span>
        </a>

        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden sm:flex items-center gap-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-teal-600 transition-colors">{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">Get Started</a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-gray-200 bg-white">
          <ul className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a onClick={() => setOpen(false)} href={item.href} className="block w-full px-2 py-2 rounded hover:bg-gray-50">{item.label}</a>
              </li>
            ))}
            <li>
              <a onClick={() => setOpen(false)} href="#contact" className="block w-full text-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">Get Started</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
