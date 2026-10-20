import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://batikgiri.example'),
  title: { default: 'Batik Giri — Wisata Edukasi Batik di Gresik', template: '%s | Batik Giri' },
  description: 'Kenali motif Batik Giri dan rasakan pengalaman wisata edukasi membatik di kawasan Giri, Gresik.',
  openGraph: {
    type: 'website', locale: 'id_ID', siteName: 'Batik Giri',
    title: 'Batik Giri — Wisata Edukasi Batik di Gresik',
    description: 'Kenali motif Batik Giri dan rasakan pengalaman wisata edukasi membatik di kawasan Giri, Gresik.',
    images: ['/og-image.svg'],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head><body><Navbar /><main>{children}</main><Footer /><WhatsAppButton /></body></html>
}
