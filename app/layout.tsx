import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParticleContainer } from '@/components/particle-container'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mats Snorre Fischer | Entwickler & Administrator',
  description: 'Personal Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#00000e] text-white relative")}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
        <ParticleContainer />
      </body>
    </html>
  )
}
