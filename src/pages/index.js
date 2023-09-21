import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Featured from '@/components/sections/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home({id}) {
  return (
    <main>
      <Hero />
      <Featured id={id}/>
    </main>
  )
}

export async function getStaticProps({params}) {
  const id = "kopdkasodkas"

  return {
    props: { id }
  }
}