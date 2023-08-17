import Dashboard from '@/components/Dashboard/Dashboard'
import Footer from '@/components/shared/Footer/Footer'
import LoginHeader from '@/components/shared/Header/LoginHeader'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })


export default function DashboardLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={`${inter.className} max-w-7xl mx-auto box-border`}>

        <div className=' min-h-[80vh]'>

          {children}
        </div>
        <Footer />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
      </body>
    </html>
  )
}
