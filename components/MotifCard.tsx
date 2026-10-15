import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'
import type { Motif } from '@/types'
export default function MotifCard({ motif }: { motif: Motif }) {
  return <Link className="motif-card" href={`/motif/${motif.slug}/`}><PlaceholderImage title={`Foto motif ${motif.name} akan hadir`} /><div className="motif-card-info"><span className="card-kicker">{motif.status === 'approved' ? 'Batik Giri' : 'Cerita segera hadir'}</span><h3>{motif.name}</h3><p>{motif.description}</p><span className="card-link">Kenali motif <ArrowUpRight size={15} /></span></div></Link>
}