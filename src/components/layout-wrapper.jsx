"use client"

import { usePathname } from 'next/navigation'
import Header from "@/components/header-simple"
import Footer from "@/components/footer-modern"
import PopupFormModern from "@/components/popup-form-modern"

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const isAdminSection = pathname?.startsWith('/admin')

  if (isAdminSection) {
    return children
  }

  return (
    <main 
      className="main-page homepage relative z-10"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '0 500px'
      }}
    >
      <Header />
      {children}
      <Footer />
      <div style={{ contentVisibility: 'auto' }}>
        <PopupFormModern />
      </div>
    </main>
  )
}