import FadeInSection from "./FadeInSection";

export default function Hero() {
    return (
        <>
            <div className="bg-red-0 fixed h-full w-full top-0 left-0 -z-10">
                <FadeInSection>
                    <h1 className="text-[3.1rem] uppercase text-center scale-y-[3] pt-[1.8rem] scale-x-[2.9] px-0 md:text-[6.0rem] md:pt-[3.0rem] lg:pt-[3.75rem] lg:scale-x-[3.75] lg:scale-y-[3.75] xl:scale-y-[4] xl:scale-x-[4] xl:pt-[4rem]">Hicami</h1>
                </FadeInSection>
                <div className="bottom-0 fixed w-full h-8 flex items-center justify-center font-barlow font-semibold md:h-12 md:text-2xl">
                    <p className="">made with 🤎 by endan</p>
                </div>
            </div>
        </>
    )
}