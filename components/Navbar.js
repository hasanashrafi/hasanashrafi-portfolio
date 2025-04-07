'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode')
    return storedDarkMode === 'true' ? true : false
  })

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  return (
    <header className="p-3 fixed top-0 left-0 right-0 z-50 text-white dark:bg-inherit dark:border-b-2 border-b-gray-800 backdrop-blur-md">
      <nav className="w-full mx-auto px-5">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="https://hasanashrafi-portfolio.vercel.app/"
            className="dark:text-gray-300 text-xl font-bold"
          >
            <Image
              src="/logo.webp"
              alt="logo"
              width={100}
              height={100}
              priority
              className="size-10 text-white"
            />
          </Link>

          <button
            className="dark-mode-button"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun className="text-yellow-500" size={24} />
            ) : (
              <Moon className="text-gray-50" size={24} />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}