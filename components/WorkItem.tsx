import FadeInSection from "./FadeInSection"
import useUrlFor from "@/hooks/useUrlFor"

export default function WorkItem({ item }: any) {

    const imageUrl = useUrlFor(item.image).quality(80).url()

    return (
        <>
            <FadeInSection>
                <img
                    src={imageUrl}
                    srcSet={imageUrl}
                    alt={item.alt}
                    loading="lazy"
                />
            </FadeInSection>
        </>
    )
}