import Link from 'next/link'
import { ArrowUpRight, Instagram } from 'lucide-react'
import site from '@/data/site.json'

const navLinks = [['/tentang/', 'Tentang'], ['/motif/', 'Motif Batik'], ['/wisata-edukasi/', 'Wisata Edukasi'], ['/paket/', 'Paket Wisata'], ['/galeri/', 'Galeri'], ['/kontak/', 'Kontak']]
export default function Footer() {
  const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}` : '/kontak/'
  return <footer className="site-footer"><div className="footer-pattern" aria-hidden="true" /><div className="wrap footer-grid">
    <div className="footer-about"><Link className="footer-brand" href="/">✳ Batik Giri</Link><p>{site.tagline} Temukan cerita budaya dan pengalaman membatik di kawasan Giri.</p><a className="footer-contact" href={wa}>Hubungi pengelola <ArrowUpRight size={15} /></a></div>
    <div><h2>Jelajahi</h2><ul>{navLinks.map(([href,label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
    <div><h2>Kunjungi</h2><p>{site.location}</p><a className="footer-contact" href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer">Buka peta <ArrowUpRight size={15} /></a>{site.instagram && <a className="footer-contact" href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>}</div>
  </div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Batik Giri</span><span>Konten budaya dan informasi kunjungan menunggu konfirmasi mitra.</span><span>Kegiatan Abmas ITS</span></div></footer>
}