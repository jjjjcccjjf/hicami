
import Masonry from '@mui/lab/Masonry';
import { Key } from 'react';
import FadeInSection from './FadeInSection';
import WorkItem from './WorkItem';

import { useEffect, useState, useRef } from 'react';

export default function Works({ gallery }: any) {

    const [galleryCols, setGalleryCols] = useState(4)

    const masonryRef = useRef<any>(null)

    useEffect(() => {
        // set the initial number of items based on default window width
        if (window.innerWidth >= 1280) {
            setGalleryCols(4)
        } else if (window.innerWidth >= 1024) {
            setGalleryCols(3)
        } else if (window.innerWidth >= 768) {
            setGalleryCols(2)
        } else {
            setGalleryCols(1);
        }

        function handleWindowResize() {
            if (window.innerWidth >= 1280) {
                setGalleryCols(4)
            } else if (window.innerWidth >= 1024) {
                setGalleryCols(3)
            }
            else if (window.innerWidth >= 768) {
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
                    <h2 id="works" className="md:text-6xl lg:text-7xl 2xl:text-6xl">Works</h2>
                </div>
                <div className="w-full pt-8 pb-4 xl:px-24 xl:pb-8 2xl:px-36 2xl:pb-4">
                    <FadeInSection>
                        <img className="xl:rounded-3xl 2xl:w-full 2xl:h-full" alt="..." src="/mirror.png"></img>
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