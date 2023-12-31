import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Provider from '@/app/providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlueProvider from '@/context/BlueProvider'
import ParticlesBackground from '@/components/ParticlesBackground'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'iBlue Wave',
  description: 'Generated by create next app'
}

export const nunito = Nunito({
  display: 'swap',
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin']
})

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${nunito.className} dark text-white bg-background font-sans selection:bg-[#EE9925]`}>
        <Provider>
          <BlueProvider>
            <Header />
              <main className="z-0">
                <ParticlesBackground />
                {children}
              </main>
            <ToastContainer />
            <Footer />
          </BlueProvider>
        </Provider>
      </body>
    </html>
  )
}
