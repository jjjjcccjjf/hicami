import CTA from "./CTA";
import FadeInSection from "./FadeInSection";

export default function Featured() {
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-red-100 mt-[19rem] h-[34rem] md:mt-[31rem] md:h-[55rem] lg:h-[60rem] lg:mt-[36.5rem]">
                {/* <div className="w-[33%] -translate-y-60"> */}
                <div className="w-5/6 -translate-y-20 md:-translate-y-[7rem] lg:w-4/6 lg:-translate-y-[8rem] xl:w-1/2">
                    <img alt="..." className="rounded-3xl" src="/chimez.jpg"></img>
                </div>
                <div className="w-5/6 -translate-y-16 flex flex-col gap-8 items-center text-xl md:-translate-y-[5rem] md:text-2xl ">
                    <p className="xl:text-4xl">Hanlo, I'm Hicami! I do arts while questioning my existence. I am excited to share my creations with others and hope to find a home for my artwork with those who appreciate the value of unique and original pieces!~</p>
                    <FadeInSection>
                        <CTA></CTA>
                    </FadeInSection>
                </div>
            </section>
        </>
    )
}