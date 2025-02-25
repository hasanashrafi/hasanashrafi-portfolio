'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Skills', href: '/' },
  { name: 'Contact', href: '/' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-700 backdrop-blur-md ">

      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-x-4'>
            <Link
              href="/"
              className="dark:text-gray-300 text-xl font-bold"
            >
              HsN.DeV
            </Link>


            <button
              className="dark-mode-button"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="text-yellow-500" size={24} />
              ) : (
                <Moon className="text-gray-500" size={24} />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="dark:text-gray-300 hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="w-full px-3 dark:bg-gray-600 md:hidden pt-4 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="  dark:text-gray-300  block py-2 text-base font-medium hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

      </nav>
    </header>
  )
}