'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setDarkMode(document.body.classList.contains('dark'));
    }
  }, [isClient]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
    if (isClient) {
      document.body.classList.toggle('dark');
    }
  }, [darkMode, isClient]);

  return (
    <header className="p-3  text-white dark:bg-gray-900 dark:border-b-2 border-b-gray-800 backdrop-blur-3xl">
      <nav className="w-full mx-auto px-5">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="https://hasanashrafi-portfolio.vercel.app/"
            className="dark:text-gray-300 text-xl font-bold"
          >
            <Image
              src="/logo.webp"
              alt="Logo"
              width={100}
              height={100}
              className='size-9'
              onError={(event) => {
                event.target.src = '/default-logo.webp';
              }}
            />
          </Link>

          <button className="dark-mode-button" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="text-yellow-500" size={24} /> : <Moon className="text-gray-50" size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}