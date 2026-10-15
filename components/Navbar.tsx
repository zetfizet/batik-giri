'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import site from '@/data/site.json'

const links = [
  ['/', 'Beranda'], ['/tentang/', 'Tentang'], ['/motif/', 'Motif Batik'],
  ['/wisata-edukasi/', 'Wisata Edukasi'], ['/paket/', 'Paket'],
  ['/fasilitas/', 'Fasilitas'], ['/galeri/', 'Galeri'], ['/kontak/', 'Kontak'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang Batik Giri.')}` : '/kontak/'
  return <header className="site-nav"><div className="wrap nav-inner">
    <Link className="brand" href="/" aria-label="Batik Giri, beranda"><span className="brand-mark">✳</span><span>Batik Giri<small>Warisan dari Gresik</small></span></Link>
    <button className="menu-toggle" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigasi utama"><div className="nav-list">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div><a className="nav-wa" href={wa} target={site.whatsapp ? '_blank' : undefined} rel={site.whatsapp ? 'noreferrer' : undefined}>WhatsApp <ArrowUpRight size={15} /></a></nav>
  </div></header>
}