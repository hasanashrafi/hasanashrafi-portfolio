'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'



export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };
  return (
    <header className="  fixed top-0 left-0 right-0  z-50 bg-white/80 dark:bg-gray-800 backdrop-blur-md ">
      <nav className="w-full mx-auto  px-5"> 
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="dark:text-gray-300 text-xl font-bold"
          >
            <Image priority alt='logo' width={100} height={100} src="/logo.png" className='size-20' />
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
      </nav>
    </header>
  )
}