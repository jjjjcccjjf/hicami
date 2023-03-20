
import Masonry from '@mui/lab/Masonry';
import { Key } from 'react';
import FadeInSection from './FadeInSection';
import WorkItem from './WorkItem';

import { useEffect, useState, useRef } from 'react';

export default function Works({ gallery }: any) {

    const [galleryCols, setGalleryCols] = useState(4)

    const masonryRef = useRef()

    useEffect(() => {
        // set the initial number of items based on default window width
        if (window.innerWidth >= 768) {
            setGalleryCols(2)
        } else {
            setGalleryCols(1);
        }

        function handleWindowResize() {
            if (window.innerWidth >= 768) {
                setGalleryCols(2)
            } else {
                setGalleryCols(1);
            }
        }

        window.addEventListener("resize", handleWindowResize, true)

        return () => {
            window.removeEventListener("resize", handleWindowResize, true)
        }
    }, [])

    return (
        <>
            <section className="bg-red-100 flex  items-center flex-col ">
                <div className="w-5/6 pt-4">
                    <h2 id="works" className="md:text-6xl">Works</h2>
                </div>
                <div className="w-full pt-8 pb-4">
                    <FadeInSection>
                        <img className="" alt="..." src="/mirror.png"></img>
                    </FadeInSection>
                </div>
                <div className="w-full pb-4 flex justify-center">
                    <hr className="w-5/6 h-[2px] bg-slate-900" />
                </div>
                <div className="w-5/6 pb-2">
                    <Masonry ref={masonryRef} columns={galleryCols} spacing={2} sx={{ width: "auto" }}>
                        {gallery.map((item: any, index: Key) => (
                            <div key={index}>
                                <WorkItem item={item}></WorkItem>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </section>
        </>
    )
}