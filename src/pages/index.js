import { Inter } from 'next/font/google'
import Hero from '@/components/sections/Hero'
import Featured from '@/components/sections/Featured'
import { client } from '../../sanity/lib/client'
import Nav from '@/components/sections/Nav'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Cta from '@/components/sections/Cta'
import Social from '@/components/sections/Social'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps() {
  const hero = await client.fetch(`*[_type == "hero"]`);
  const about = await client.fetch(`*[_type == "about"]`);
  const featured = await client.fetch(`*[_type == "featured"]`);
  const testimonials = await client.fetch(`*[_type == "testimonials"]`);
  const cta = await client.fetch(`*[_type == "cta"]`);
  const social = await client.fetch(`*[_type == "social"]`);
  // console.log(cta);

  return {
    props: { hero, about, featured, testimonials, cta, social }
  }
}


export default function Home({ hero, about, featured, testimonials, cta, social }) {
  return (
    <main>
      <Nav />
      <Hero hero={hero} />
      <About about={about} />
      <Featured featured={featured} />
      <Testimonials testimonials={testimonials} />
      <Cta cta={cta} />
      <Social social={social} />
      <Footer />
    </main>
  )
}