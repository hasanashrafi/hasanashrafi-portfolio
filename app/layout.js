import { Inter } from 'next/font/google'

import './globals.css'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hasan Ashrafi - Frontend Developer',
  description: 'Portfolio showcasing my frontend development projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="  ">
      <body className={`${inter.className}  bg-[url(/images/bg.avif)] backdrop-blur-3xl bg-no-repeat bg-cover  `}>
        <div className="min-h-screen flex flex-col ">
          <Navbar />
          <main className=" ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}