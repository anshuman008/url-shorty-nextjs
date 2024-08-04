
import './globals.css'
import Navbar from './comonents/Navbar'
import HeroComp from './comonents/HeroComp'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
          <Navbar/>
            {children}
        </body>
      </html>
  )
}