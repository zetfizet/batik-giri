import type { Metadata } from 'next'
import MotifCard from '@/components/MotifCard'
import motifs from '@/data/motifs.json'
export const metadata: Metadata = { title: 'Motif Batik Giri', description: 'Katalog motif Batik Giri, termasuk Belimbing Wuluh, Kupat, Giri Kedaton, Keris, Gerabah, dan lainnya.' }
export default function MotifsPage() {
 const listed = motifs.filter(motif => !motif.optional)
 return <><header className="page-hero"><div className="wrap"><span className="eyebrow">Katalog motif</span><h1>Motif Batik Giri</h1><p>Nama motif telah tercatat. Foto, cerita, filosofi, inspirasi, dan status produksi akan ditambahkan setelah dikonfirmasi bersama pengrajin.</p></div></header><section className="page-body"><div className="wrap"><p className="status-note">Narasi yang belum tervalidasi ditandai “Segera hadir”. Tidak ada filosofi motif yang ditampilkan sebagai fakta sebelum dikonfirmasi.</p><div className="motif-grid" style={{ marginTop: 28 }}>{listed.map(motif => <MotifCard motif={motif} key={motif.slug} />)}</div><div className="empty-note" style={{ marginTop: 22 }}><strong>Motif opsional:</strong> Kendeng Urdu (Kenong Bandeng Urang Windu) menunggu konfirmasi untuk ditampilkan.</div></div></section></>
}