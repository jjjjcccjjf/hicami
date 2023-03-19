import FadeInSection from "./FadeInSection";

export default function Hero() {
    return (
        <>
            <div className="bg-red-100 fixed h-full w-full top-0 left-0 -z-10">
                <FadeInSection>
                    <h1 className="text-[3.1rem] uppercase text-center scale-y-[2.5] pt-[2.0rem] px-0">Hanlo, It&apos;s Hicami!</h1>
                </FadeInSection>
                <div className="bottom-0 fixed w-full h-8 flex items-center justify-center font-barlow font-semibold">
                    <p className="">made with 🤎 by endan</p>
                </div>
            </div>
        </>
    )
}