import Navbar from "../components/navbar/navBar"
import Footer from "../components/footer/Footer"
import './global.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='container'>
          <Navbar />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}