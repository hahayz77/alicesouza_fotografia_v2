import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/sections/Hero'
import Featured from '@/components/sections/Featured'
import { client } from '../../sanity/lib/client'
import Nav from '@/components/sections/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ hero }) {
  return (
    <main>
      <Nav />
      <Hero hero={hero} />
      <Featured />
    </main>
  )
}

export async function getStaticProps() {
  const hero = await client.fetch(`*[_type == "hero"]`);

  return {
    props: { hero }
  }
}