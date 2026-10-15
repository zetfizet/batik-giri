export interface Motif {
  slug: string
  name: string
  status: string
  description: string
  optional?: boolean
}
export interface TourPackage {
  slug: string
  name: string
  tagline: string
  description: string
  duration: string
  price: string
  participants: string
  product: string
  activities: string[]
  facilities: string[]
  status: string
}
