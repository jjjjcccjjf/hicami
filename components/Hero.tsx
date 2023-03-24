import FadeInSection from "./FadeInSection";

export default function Hero() {
    return (
        <>
            <div className="bg-red-100 fixed h-full w-full top-0 left-0 -z-10">
                <FadeInSection>
                    <h1 className="text-[2.75rem] uppercase text-center scale-y-[3] pt-[1.8rem] scale-x-[2.9] px-0 sm:text-[3.5rem] sm:pt-[1.6rem] sm:scale-x-[3.6] sm:scale-y-[3] md:text-[6.0rem] md:pt-[3.0rem] lg:pt-[3.75rem] lg:scale-x-[3.75] lg:scale-y-[3.75] xl:scale-y-[4] xl:scale-x-[4] xl:pt-[3.25rem] 2xl:scale-[5] 2xl:pt-[4.25rem]">Hicami</h1>
                </FadeInSection>
                <div className="bottom-0 fixed w-full h-8 flex items-center justify-center font-barlow font-semibold md:h-12 md:text-2xl 2xl:text-2xl 2xl:h-20">
                    <p className="">made with 🤎 by endan</p>
                </div>
            </div>
        </>
    )
}