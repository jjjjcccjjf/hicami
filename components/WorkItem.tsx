import FadeInSection from "./FadeInSection"
import useUrlFor from "@/hooks/useUrlFor"

export default function WorkItem({ item, className}: any) {

    const imageUrl = useUrlFor(item.image).quality(80).url()

    return (
        <>
            <img
                className={className}
                src={imageUrl}
                srcSet={imageUrl}
                alt={item.alt}
                loading="lazy"
            />
        </>
    )
}