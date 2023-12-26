"use client"

import Python_logo from "@/public/technologies/Python-logo.svg"
import Java_logo from "@/public/technologies/Java-logo.png"
import Go_logo from "@/public/technologies/Go-logo.svg"
import Kotlin_logo from "@/public/technologies/Kotlin-logo.png"
import HTML_logo from "@/public/technologies/HTML-logo.svg"
import HTMX_logo from "@/public/technologies/HTMX-logo.png"
import CSS_logo from "@/public/technologies/CSS-logo.svg"
import JavaScript_logo from "@/public/technologies/JavaScript-logo.png"
import TypeScript_logo from "@/public/technologies/Typescript-logo.svg"
import PHP_logo from "@/public/technologies/PHP-logo.svg"
import CSharp_logo from "@/public/technologies/CSharp-logo.png"
import React_logo from "@/public/technologies/React-logo.svg"
import NextJS_logo from "@/public/technologies/NextJS-logo.png"
import Spring_logo from "@/public/technologies/Spring-logo.png"
import Vertx_logo from "@/public/technologies/Vertx-logo.png"
import Netty_logo from "@/public/technologies/Netty-logo.png"
import Angular_logo from "@/public/technologies/Angular-logo.svg"
import Playwright_logo from "@/public/technologies/Playwright-logo.png"
import MariaDB_logo from "@/public/technologies/MariaDB-logo.png"
import PostgreSQL_logo from "@/public/technologies/PostgreSQL-logo.png"
import EdgeDB_logo from "@/public/technologies/EdgeDB-logo.png"
import MongoDB_logo from "@/public/technologies/MongoDB-logo.png"
import Redis_logo from "@/public/technologies/Redis-logo.png"
import Proxmox_logo from "@/public/technologies/Proxmox-logo.png"
import VirtFusion_logo from "@/public/technologies/VirtFusion-logo.png"
import Git_logo from "@/public/technologies/Git-logo.svg"
import Gradle_logo from "@/public/technologies/Gradle-logo.png"
import Windows_logo from "@/public/technologies/Windows-logo.svg"
import MacOS_logo from "@/public/technologies/MacOS-logo.svg"
import Linux_logo from "@/public/technologies/Linux-logo.svg"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import Image from "next/image"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { useState } from "react"

const technologies = [
    {
        name: "Python",
        logo: Python_logo,
        category: "Language"
    },
    {
        name: "Java",
        logo: Java_logo,
        category: "Language"
    },
    {
        name: "Go",
        logo: Go_logo,
        category: "Language"
    },
    {
        name: "Kotlin",
        logo: Kotlin_logo,
        category: "Language"
    },
    {
        name: "HTML",
        logo: HTML_logo,
        category: "Language"
    },
    {
        name: "HTMX",
        logo: HTMX_logo,
        category: "Language"
    }, {
        name: "CSS",
        logo: CSS_logo,
        category: "Language"
    },
    {
        name: "JavaScript",
        logo: JavaScript_logo,
        category: "Language"
    },
    {
        name: "TypeScript",
        logo: TypeScript_logo,
        category: "Language"
    },
    {
        name: "PHP",
        logo: PHP_logo,
        category: "Language"
    },
    {
        name: "C#",
        logo: CSharp_logo,
        category: "Language"
    },
    {
        name: "React",
        logo: React_logo,
        category: "Framework"
    },
    {
        name: "NextJS",
        logo: NextJS_logo,
        category: "Framework"
    },
    {
        name: "Angular",
        logo: Angular_logo,
        category: "Framework"
    },
    {
        name: "Playwright",
        logo: Playwright_logo,
        category: "Framework"
    },
    {
        name: "Spring",
        logo: Spring_logo,
        category: "Framework"
    },
    {
        name: "Vertx",
        logo: Vertx_logo,
        category: "Framework"
    },
    {
        name: "Netty",
        logo: Netty_logo,
        category: "Framework"
    },
    {
        name: "MariaDB",
        logo: MariaDB_logo,
        category: "Database"
    },
    {
        name: "PostgreSQL",
        logo: PostgreSQL_logo,
        category: "Database"
    },
    {
        name: "EdgeDB",
        logo: EdgeDB_logo,
        category: "Database"
    },
    {
        name: "MongoDB",
        logo: MongoDB_logo,
        category: "Database"
    },
    {
        name: "Redis",
        logo: Redis_logo,
        category: "Database"
    },
    {
        name: "Proxmox",
        logo: Proxmox_logo,
        category: "Other"
    },
    {
        name: "VirtFusion",
        logo: VirtFusion_logo,
        category: "Other"
    },
    {
        name: "Git",
        logo: Git_logo,
        category: "Other"
    },
    {
        name: "Gradle",
        logo: Gradle_logo,
        category: "Other"
    },
    {
        name: "Windows",
        logo: Windows_logo,
        category: "Other"
    },
    {
        name: "MacOS",
        logo: MacOS_logo,
        category: "Other"
    },
    {
        name: "Linux",
        logo: Linux_logo,
        category: "Other"
    },
]

export function Technologies() {
    const [categories, setCategories] = useState<string[]>([])

    return (<>
        <ToggleGroup onValueChange={values => {
            setCategories(values)
        }} type="multiple" className="mt-6 gap-5 flex flex-col md:flex-row w-44">
            <ToggleGroupItem className="w-full md:max-w-max" variant="outline" value="Language" aria-label="Toggle bold">
                Programmiersprachen
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full md:max-w-max" variant="outline" value="Framework" aria-label="Toggle bold">
                Frameworks
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full md:max-w-max" variant="outline" value="Database" aria-label="Toggle bold">
                Datenbanken
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full md:max-w-max" variant="outline" value="Other" aria-label="Toggle bold">
                Sonstige
            </ToggleGroupItem>
        </ToggleGroup>
        <TooltipProvider>
            <ul className='mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4'>
                {technologies.map((technology) => {
                    if (categories.length != 0) {
                        if (!(categories.includes(technology.category))) {
                            return
                        }
                    }

                    return (
                        <Tooltip key={technology.name}>
                            <TooltipTrigger key={technology.name} asChild>
                                <li className='p-4 bg-gray-500/25 rounded-sm flex items-center justify-center hover:transform hover:scale-125' key={technology.name}>
                                    <Image width={40} height={40} src={technology.logo} alt={technology.name} className='max-w-[40px] max-h-[40px]' />
                                </li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{technology.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </ul>
        </TooltipProvider>
    </>)
}