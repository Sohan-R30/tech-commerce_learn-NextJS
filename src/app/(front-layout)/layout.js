import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import NavigationBar from '@/components/shared/NavigationBar/NavigationBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function FrontLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={`${inter.className} max-w-7xl mx-auto box-border`}>

        <Header/>
        <NavigationBar/>
        <div className='min-h-[82vh]'>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
