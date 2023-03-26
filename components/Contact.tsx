import FadeInSection from './FadeInSection';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Tilt from 'react-vanilla-tilt'

import CTA from './CTA';

export default function Contact() {
    return (
        <>
            <section className="bg-red-100 flex items-center flex-col pb-8 mb-8 md:mb-12 2xl:mb-20">
                <div className="w-5/6 pb-8 md:pb-10 ">
                    <h2 id="contact" className="md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-6xl">Contact</h2>
                </div>

                <div className=" w-5/6 rounded-xl lg:w-2/3 xl:w-1/2 2xl:w-1/3">
                    <Tilt options={{ glare: false, "glare-prerender": false, "max-glare": 0, }} style={{ background: 'none', boxShadow: 'none' }}>
                        <div className="py-3 px-4">
                            <ul className="flex justify-between md:text-2xl">
                                <li>Artist</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                        <div className=" flex justify-center py-4 md:text-2xl">
                            <CTA></CTA>
                        </div>
                        <div className="py-4">
                            <ul className="flex flex-row justify-center gap-4 items-center">
                                <li className="h-8 md:h-12"><EmojiEmotionsIcon sx={{ height: '100%', width: '100%' }}></EmojiEmotionsIcon></li>
                                <li className="h-8 md:h-12"><TwitterIcon sx={{ height: '100%', width: '100%' }}></TwitterIcon></li>
                                <li className="h-8 md:h-12"><InstagramIcon sx={{ height: '100%', width: '100%' }}></InstagramIcon></li>
                            </ul>
                        </div>
                        <div className="py-3 px-4">
                            <ul className="flex justify-between md:text-2xl">
                                <li>Something</li>
                                <li>Else</li>
                            </ul>
                        </div>
                    </Tilt>
                </div>

            </section>

        </>
    )
}