import { Button } from "./ui/button";

export function Header() {
    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between">
            <h1 className="text-xl">Mats Snorre Fischer</h1>
            <div className="flex gap-3">
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