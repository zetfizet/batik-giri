interface Props { eyebrow: string; title: string; description?: string; centered?: boolean }
export default function SectionTitle({ eyebrow, title, description, centered = false }: Props) {
  return <div className={`section-title ${centered ? 'centered' : ''}`}><span className="eyebrow">{eyebrow}</span><h2 dangerouslySetInnerHTML={{ __html: title }} />{description && <p>{description}</p>}</div>
}