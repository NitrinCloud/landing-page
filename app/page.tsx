import Link from 'next/link'
import LinkedIn from "@/public/LinkedIn.png"
import GitHub from "@/public/github-mark.png"
import Image from "next/image"
import { Technologies } from '@/components/technologies'

export default function Home() {
  return (
    <main>
      <section className='min-h-screen flex justify-center items-center flex-col text-center' id="start">
        <h2 className='text-[2rem] md:text-[4rem] font-extralight'>Hallo, ich bin <span className='bg-gradient-to-r from-yellow-300 via-green-200 to-orange-400 inline-block text-transparent bg-clip-text'>Mats Snorre Fischer</span></h2>
        <p className='text-[1rem] md:text-[2rem] font-extralight'>Ich bin ein Fullstack Entwickler und Systemadministrator</p>
        <div className='flex gap-12 mt-12 justify-center items-center'>
          <Link className='p-4 bg-gray-500/25 rounded-sm hover:transform hover:scale-125' target='_blank' href={"https://www.linkedin.com/in/mats-fischer-a97889228/"}>
            <Image width={36} height={36} src={LinkedIn} alt='LinkedIn Logo' />
          </Link>
          <Link className='p-4 bg-gray-500/25 rounded-sm hover:transform hover:scale-125' target='_blank' href={"https://github.com/NitrinCloud"}>
            <Image width={36} height={36} src={GitHub} alt='LinkedIn Logo' />
          </Link>
        </div>
      </section>
      <section className='min-h-screen flex justify-center items-center flex-col text-center' id='technologies'>
        <h3 className='text-5xl'>Technologien</h3>
        <Technologies />
      </section>
      <section className='min-h-screen flex justify-center items-center flex-col text-center' id='projects'>
        <h1 className='text-5xl'>Projekte folgen...</h1>
      </section>
    </main>
  )
}
