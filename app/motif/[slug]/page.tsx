import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/PlaceholderImage'
import motifs from '@/data/motifs.json'
import site from '@/data/site.json'
import type { Motif } from '@/types'
type Props = { params: Promise<{ slug: string }> }
const listed = motifs.filter(item => !item.optional) as Motif[]
export function generateStaticParams() { return listed.map(motif => ({ slug: motif.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params; const motif = listed.find(item => item.slug === slug)
 return motif ? { title: `${motif.name} | Motif Batik Giri`, description: `Kenali motif ${motif.name} dari katalog Batik Giri. Cerita dan filosofi akan hadir setelah divalidasi bersama pengrajin.` } : {}
}
export default async function MotifDetailPage({ params }: Props) {
 const { slug } = await params; const index = listed.findIndex(item => item.slug === slug); if (index < 0) notFound()
 const motif = listed[index], previous = listed[(index + listed.length - 1) % listed.length], next = listed[(index + 1) % listed.length]
 const message = encodeURIComponent(`Halo, saya ingin bertanya tentang motif ${motif.name}.`)
 const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${message}` : '/kontak/'
 return <><header className="page-hero"><div className="wrap"><Link className="footer-contact" href="/motif/">← Kembali ke semua motif</Link><span className="eyebrow">Motif Batik Giri</span><h1>{motif.name}</h1><p>{motif.description}</p></div></header><section className="page-body"><div className="wrap detail-layout"><div className="detail-main"><PlaceholderImage title={`Foto motif ${motif.name} akan hadir`} /><div className="content-copy"><h2>Tentang motif ini</h2><p className="status-note">Segera hadir — sejarah, filosofi, inspirasi, ciri khas, dan hubungan motif dengan kawasan Giri sedang menunggu validasi pengrajin.</p><div className="story-grid"><article className="story-panel"><h3>Inspirasi & ciri khas</h3><p>Segera hadir setelah dikonfirmasi bersama mitra.</p></article><article className="story-panel"><h3>Sejarah & filosofi</h3><p>Segera hadir setelah dikonfirmasi bersama mitra.</p></article><article className="story-panel"><h3>Hubungan dengan Giri</h3><p>Segera hadir setelah dikonfirmasi bersama mitra.</p></article><article className="story-panel"><h3>Status produksi</h3><p>Informasi produksi saat ini perlu dikonfirmasi kepada pengrajin.</p></article></div></div><div className="pager"><Link href={`/motif/${previous.slug}/`}>← {previous.name}</Link><Link href={`/motif/${next.slug}/`}>{next.name} →</Link></div></div><aside className="detail-aside"><span className="eyebrow">Ingin tahu lebih?</span><h2>Tanyakan motif ini.</h2><p>Hubungi pengelola untuk menanyakan ketersediaan produk atau cerita dari pengrajin.</p><a className="btn btn-wa" href={wa} target={site.whatsapp ? '_blank' : undefined} rel={site.whatsapp ? 'noreferrer' : undefined}>Tanya motif via WhatsApp</a></aside></div></section></>
}