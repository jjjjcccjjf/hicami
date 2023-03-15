import useUrlFor from "@/hooks/useUrlFor"

export default function WorkItem({ item }) {

    const imageUrl = useUrlFor(item.image).quality(80).url()

    return (
        <>
            <img
                src={imageUrl}
                srcSet={imageUrl}
                alt={item.alt}
                loading="lazy"
            />
        </>
    )
}