interface Props { title?: string; className?: string; small?: boolean }
export default function PlaceholderImage({ title = 'Foto Batik Giri akan hadir', className = '', small = false }: Props) {
  return <div className={`placeholder-art ${small ? 'small' : ''} ${className}`} role="img" aria-label={title}><span className="placeholder-glyph" aria-hidden="true">✳</span><span className="placeholder-caption">{title}</span></div>
}