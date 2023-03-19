import { useRef, useState, useEffect, PropsWithChildren } from "react"

export default function FadeInSection(props: PropsWithChildren) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const current = domRef.current;
        if (!current) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(current);

        return () => {
            const current = domRef.current;
            if (!current) return;
            observer.unobserve(current)
        };

    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}