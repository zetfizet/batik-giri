import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/PlaceholderImage'
import packages from '@/data/packages.json'
import site from '@/data/site.json'
import type { TourPackage } from '@/types'
type Props = { params: Promise<{ slug: string }> }
const items = packages as TourPackage[]
export function generateStaticParams() { return items.map(item => ({ slug: item.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params, item = items.find(entry => entry.slug === slug)
 return item ? { title: `${item.name} | Paket Wisata Batik Giri`, description: `${item.tagline} Tanyakan detail paket ${item.name} langsung kepada pengelola Batik Giri.` } : {}
}
export default async function PackageDetailPage({ params }: Props) {
 const { slug } = await params, item = items.find(entry => entry.slug === slug); if (!item) notFound()
 const message = encodeURIComponent(`Halo, saya ingin bertanya tentang paket ${item.name}.`)
 const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${message}` : '/kontak/'
 return <><header className="page-hero"><div className="wrap"><a className="footer-contact" href="/paket/"><span className="arrow" data-dir="left">←</span> Kembali ke paket wisata</a><span className="eyebrow">Paket wisata edukasi</span><h1>{item.name}</h1><p>{item.tagline}</p></div></header><section className="page-body"><div className="wrap detail-layout"><div className="detail-main"><PlaceholderImage title={`Foto paket ${item.name} akan hadir`} /><h2>Gambaran paket</h2><p>{item.description}</p><div className="story-grid"><article className="story-panel"><h3>Durasi</h3><p>{item.duration}</p></article><article className="story-panel"><h3>Jumlah peserta</h3><p>{item.participants}</p></article></div><h2 style={{ marginTop: 34 }}>Rangkaian aktivitas</h2><ol className="detail-list">{item.activities.map(activity => <li key={activity}>{activity}</li>)}</ol><h2>Fasilitas & yang didapat</h2><ul className="detail-list">{item.facilities.map(facility => <li key={facility}>{facility}</li>)}<li>{item.product}</li></ul><p className="status-note">Rangkaian, harga, ketersediaan produk, dan fasilitas akan dikonfirmasi melalui WhatsApp. Website tidak menyediakan pembayaran online.</p></div><aside className="detail-aside"><span className="eyebrow">Informasi paket</span><h2>{item.name}</h2><p>{item.price || 'Harga dikonfirmasi via WhatsApp.'}</p><p><strong>Durasi:</strong> {item.duration}</p><p><strong>Peserta:</strong> {item.participants}</p><a className="btn btn-wa" href={wa} target={site.whatsapp ? '_blank' : undefined} rel={site.whatsapp ? 'noreferrer' : undefined}>Pesan via WhatsApp</a></aside></div></section></>
}