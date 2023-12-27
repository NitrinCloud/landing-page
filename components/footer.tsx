import Link from "next/link";

export function Footer() {
    return(<footer className="absolute bottom-0 p-12 w-full flex justify-between">
        <section>
            <h3 className="text-2xl font-extralight">Mats Snorre Fischer</h3>
            <p className="text-sm font-extralight">Von Entwicklung bis Administration</p>
        </section>
        <section>
            <Link className="text-lg hover:underline" href={"/imprint"}>Impressum</Link>
        </section>
    </footer>)
}