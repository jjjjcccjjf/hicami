import FadeInSection from './FadeInSection';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import CTA from './CTA';

export default function Contact() {
    return (
        <>
            <section className="bg-red-100 flex items-center flex-col pt-2 pb-2 mb-8 md:mb-12">
                <div className="w-5/6 pb-8 md:pb-10">
                    <h2 id="contact" className="md:text-6xl">Contact</h2>
                </div>
                <div className="w-5/6 flex justify-center md:text-2xl">
                    <FadeInSection>
                        <CTA></CTA>
                    </FadeInSection>
                </div>
                <div className="w-5/6 py-8">
                    <ul className="flex flex-row justify-evenly">
                        <li className="h-8 md:h-14"><EmojiEmotionsIcon sx={{ height: '100%', width: '100%' }}></EmojiEmotionsIcon></li>
                        <li className="h-8 md:h-14"><TwitterIcon sx={{ height: '100%', width: '100%' }}></TwitterIcon></li>
                        <li className="h-8 md:h-14"><InstagramIcon sx={{ height: '100%', width: '100%' }}></InstagramIcon></li>
                    </ul>
                </div>
            </section>

        </>
    )
}