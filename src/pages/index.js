import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/sections/Hero'
import Featured from '@/components/sections/Featured'
import { client } from '../../sanity/lib/client'
import Nav from '@/components/sections/Nav'
import About from '@/components/sections/About'

const inter = Inter({ subsets: ['latin'] })



export default function Home({ hero, about }) {
  return (
    <main>
      <Nav />
      <Hero hero={hero} />
      <About about={about} />
      <Featured />
    </main>
  )
}

export async function getStaticProps() {
  const hero = await client.fetch(`*[_type == "hero"]`);
  const about = await client.fetch(`*[_type == "about"]`);
  // console.log(about);

  return {
    props: { hero, about }
  }
}