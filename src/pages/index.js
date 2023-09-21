import Image from 'next/image'
import { Inter } from 'next/font/google'
import Featured from '@/components/sections/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Featured/>
    </main>
  )
}
