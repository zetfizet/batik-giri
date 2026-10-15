'use client'

import { useEffect, useState } from 'react'
import PlaceholderImage from './PlaceholderImage'
const captions = ['Suasana kawasan Giri', 'Proses membatik', 'Motif Batik Giri', 'Pengrajin lokal', 'Aktivitas wisata edukasi', 'Cerita dalam kain']
export default function GalleryPreview() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return <>
    <div className="gallery-grid gallery-preview">{captions.map(caption => <button className="gallery-tile" key={caption} aria-label={`Lihat foto ${caption}`} onClick={() => setActive(caption)}><PlaceholderImage title="Foto resmi Batik Giri akan hadir" small /></button>)}</div>
    {active && <div className="lightbox open" role="dialog" aria-modal="true" aria-label={active} onClick={event => { if (event.target === event.currentTarget) setActive(null) }}><div className="lightbox-inner"><button className="lightbox-close" aria-label="Tutup foto" onClick={() => setActive(null)}>Tutup ×</button><PlaceholderImage title="Foto resmi Batik Giri akan hadir" /><p className="lightbox-caption">{active}</p></div></div>}
  </>
}