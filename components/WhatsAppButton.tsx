import { ChatRoundDots } from 'reicon-react'
import site from '@/data/site.json'
export default function WhatsAppButton() {
  const href = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Halo, saya ingin mengetahui informasi Batik Giri.')}` : '/kontak/'
  return <a className="floating-wa" href={href} target={site.whatsapp ? '_blank' : undefined} rel={site.whatsapp ? 'noreferrer' : undefined} aria-label="Hubungi Batik Giri via WhatsApp"><ChatRoundDots size={24} /><span>WhatsApp</span></a>
}