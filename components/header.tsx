import { Button } from "./ui/button";

export function Header() {
    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between">
            <h1 className="hidden md:block text-xl">Mats Snorre Fischer</h1>
            <div className="flex gap-3 justify-between items-center w-full mx-auto md:mx-0 md:max-w-max">
                <Button variant="ghost" asChild>
                    <a href={"/#start"}>Start</a>
                </Button>
                <Button variant="ghost" asChild>
                    <a href={"/#technologies"}>Technologien</a>
                </Button>
                <Button variant="ghost" asChild>
                    <a href={"/#projects"}>Projekte</a>
                </Button>
            </div>
        </nav>
    )
}