export default function Nav() {
    return (
        <>
            <section className="bg-red-300 fixed top-0 left-0 w-full h-8 flex items-center z-10">
                <nav className="w-full">
                    <ul className="flex flex-row justify-evenly">
                        <li>Home</li>
                        <li>Works</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </section>
        </>
    )
}