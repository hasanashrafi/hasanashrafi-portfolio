import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import ReactQueryProvider from './ReactQueryProvider'
import ProjectsProvider from './ProjectsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hasan Ashrafi - Frontend Developer',
  description: 'Portfolio showcasing my frontend development projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main>
            <ReactQueryProvider>
              <ProjectsProvider>
                {children}
              </ProjectsProvider>
            </ReactQueryProvider>
          </main>
        </div>
      </body>
    </html>
  )
}