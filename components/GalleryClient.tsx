'use client'

import { useEffect, useState } from 'react'
import PlaceholderImage from './PlaceholderImage'
import gallery from '@/data/gallery.json'
const filters = ['Semua', 'Lokasi', 'Pengrajin', 'Aktivitas Membatik', 'Produk/Motif', 'Pengunjung']
export default function GalleryClient() {
 const [filter,setFilter]=useState('Semua'), [active,setActive]=useState<string|null>(null)
 useEffect(()=>{const close=(event:KeyboardEvent)=>event.key==='Escape'&&setActive(null);window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[])
 const visible=gallery.filter(item=>filter==='Semua'||item.category===filter)
 return <><div className="filter-row" role="group" aria-label="Filter foto galeri">{filters.map(category=><button key={category} className={`filter-button ${filter===category?'active':''}`} aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div><div className="gallery-masonry">{visible.map(item=><button key={item.title} className="gallery-item" aria-label={`Buka foto ${item.title}`} onClick={()=>setActive(item.title)}><PlaceholderImage title={`Foto ${item.title.toLowerCase()} akan hadir`} /><span className="gallery-caption">{item.title}</span></button>)}</div>{active&&<div className="lightbox open" role="dialog" aria-modal="true" aria-label={active} onClick={event=>{if(event.target===event.currentTarget)setActive(null)}}><div className="lightbox-inner"><button className="lightbox-close" aria-label="Tutup galeri" onClick={()=>setActive(null)}>Tutup ×</button><PlaceholderImage title="Foto resmi Batik Giri akan hadir" /><p className="lightbox-caption">{active}</p></div></div>}</>
}