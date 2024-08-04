import {
  ClerkProvider,
  RedirectToSignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Navbar from './comonents/Navbar'
import HeroComp from './comonents/HeroComp'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar/>
       
           {/* <SignedOut> */}
            {/* <HeroComp/> */}
           {/* </SignedOut> */}

          {/* <SignedIn> */}
            {children}
          {/* </SignedIn> */}
        
        </body>
      </html>
    // </ClerkProvider>
  )
}