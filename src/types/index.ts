export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  link: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  number: number;
  category: string;
}

export interface CourseCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  ctaUrl: string;
  image?: string;
  badge?: string;
}

export interface GuestProfile {
  id: string;
  name: string;
  image?: string;
  link: string;
}
