import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rishika Hotlani - Portfolio',
  icons: {
    icon: '/favi.png', 
    shortcut: '/favi.png', // Optional: Add as shortcut icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  )
}

