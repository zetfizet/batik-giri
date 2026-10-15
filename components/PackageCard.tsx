import Link from 'next/link'
import { ArrowUpRight, Clock3, Users, PackageCheck } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'
import site from '@/data/site.json'
import type { TourPackage } from '@/types'
export default function PackageCard({ item, featured = false }: { item: TourPackage; featured?: boolean }) {
  const message = encodeURIComponent(`Halo, saya ingin bertanya tentang paket ${item.name}.`)
  const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${message}` : '/kontak/'
  return <article className={`package-card ${featured ? 'featured' : ''}`}><PlaceholderImage title={`Foto paket ${item.name} akan hadir`} /><div className="package-body"><span className="card-kicker">{item.tagline}</span><span className="review-badge">Rancangan awal · konfirmasi mitra</span><h3>{item.name}</h3><p>{item.description}</p><div className="package-meta"><span><Clock3 size={14} /> {item.duration}</span><span><Users size={14} /> {item.participants}</span></div><div className="product-badge"><PackageCheck size={15} /> {item.product}</div><div className="package-price">{item.price || 'Harga dikonfirmasi via WhatsApp'}</div><div className="package-actions"><Link className="btn btn-outline" href={`/paket/${item.slug}/`}>Lihat detail <ArrowUpRight size={15} /></Link><a className="btn btn-wa" href={wa} target={site.whatsapp ? '_blank' : undefined} rel={site.whatsapp ? 'noreferrer' : undefined}>Pesan via WhatsApp</a></div></div></article>
}