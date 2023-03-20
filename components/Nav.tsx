import Link from "next/link"

export default function Nav() {
    return (
        <>
            <section className="bg-red-100 fixed top-0 left-0 w-full h-8 flex items-center z-10 md:h-12">
                <nav className="w-full">
                    <ul className="flex flex-row justify-evenly uppercase underline md:text-lg">
                        <li> <Link href="/">Home</Link> </li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}