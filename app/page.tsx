import Link from 'next/link'
import LinkedIn from "@/public/LinkedIn.png"
import GitHub from "@/public/github-mark.png"
import CodeWars from "@/public/codewars.png"
import Image from "next/image"
import { Technologies } from '@/components/technologies'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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
          <Link className='p-4 bg-gray-500/25 rounded-sm hover:transform hover:scale-125' target='_blank' href={"https://www.codewars.com/users/NitrinCloud"}>
            <Image width={36} height={36} src={CodeWars} alt='CodeWars Logo' />
          </Link>
        </div>
      </section>
      <section className='min-h-screen flex justify-center items-center flex-col text-center' id='technologies'>
        <h3 className='text-5xl'>Technologien</h3>
        <Technologies />
      </section>
      <section className='min-h-screen flex justify-center items-center flex-col text-center' id='projects'>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between"><span>Bricklist</span> <Button variant="link" asChild><Link target="_blank" href="https://bricklist.nitrin.dev/">Schaue es dir an (https://bricklist.nitrin.dev/)</Link></Button></CardTitle>
            <CardDescription className="flex justify-start">Baustein Liste</CardDescription>
          </CardHeader>
          <CardContent>
            <span>Erstelle eine Liste deiner Lego Sets oder von den, die du dir wünschst.</span>
            <div className="mt-8">
              <h3 className="flex justify-start text-base font-bold">Genutzte Technologien:</h3>
              <span className="flex justify-start text-sm">Shadcn/ui, TailwindCSS, NextJS, Turso, Prisma</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
