import CTA from "./CTA";
import FadeInSection from "./FadeInSection";

interface FeaturedProps {
    featuredSection: {
        featuredParagraph: string
    }
}

export default function Featured({ featuredSection }: FeaturedProps) {

    const featuredParagraph = featuredSection.featuredParagraph ?? "Hello world!"
    return (
        <>
            <section className="relative flex flex-col items-center justify-center bg-red-100 mt-[19rem] h-[34rem] sm:h-[38rem] md:mt-[31rem] md:h-[55rem] lg:h-[60rem] lg:mt-[36.5rem] 2xl:h-[48rem] 2xl:mt-[49rem]">
                {/* <div className="w-[33%] -translate-y-60"> */}
                <div className="w-5/6 -translate-y-20 sm:w-2/3 md:-translate-y-[7rem] lg:w-4/6 lg:-translate-y-[8rem] xl:w-1/2 2xl:w-1/3 flex justify-center">
                    <FadeInSection>
                        <img alt="..." className="rounded-3xl" src="/chimez.jpg"></img>
                    </FadeInSection>
                </div>
                <div className="w-5/6 -translate-y-16 flex flex-col gap-8 items-center text-xl md:-translate-y-[5rem] md:text-2xl lg:w-2/3 xl:w-1/2 2xl:w-1/3">
                    <p className="xl:text-3xl 2xl:text-2xl">{featuredParagraph}</p>
                    <FadeInSection>
                        <CTA></CTA>
                    </FadeInSection>
                </div>
                <div className="absolute left-0 -rotate-12 scale-[2]">
                </div>
            </section>
        </>
    )
}