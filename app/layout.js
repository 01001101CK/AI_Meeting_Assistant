import { Inter } from 'next/font/google'
import './globals.css'
//import Navbar to layout because every page needs access to Navbar
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal AI Assistant',
  description: 'Automatically summarize your meeting transcript',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-4xl mx-auto p-2">
          <Navbar />
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
