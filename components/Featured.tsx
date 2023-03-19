import CTA from "./CTA";
import FadeInSection from "./FadeInSection";

export default function Featured() {
    return (
        <>
            <section className="flex flex-col items-center justify-center bg-red-100 mt-[19rem] h-[34rem]">
                {/* <div className="w-[33%] -translate-y-60"> */}
                <div className="w-5/6 -translate-y-20">
                    <img alt="..." className="rounded-3xl" src="/chimez.jpg"></img>
                </div>
                <div className="w-5/6 -translate-y-16 flex flex-col gap-8 items-center text-xl">
                    <p>Hanlo! I do arts while questioning my existence. I am excited to share my creations with others and hope to find a home for my artwork with those who appreciate the value of unique and original pieces!~</p>
                    <FadeInSection>
                        <CTA></CTA>
                    </FadeInSection>
                </div>
            </section>
        </>
    )
}