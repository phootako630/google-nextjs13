import './globals.css'
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
      {children}
      {/* footer */}
      <Footer />
      </body>
    </html>
  )
}
