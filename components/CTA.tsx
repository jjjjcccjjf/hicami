import EmailIcon from '@mui/icons-material/Email';

export default function CTA() {
    return (
        <>
            <a className="hover:animate-[wiggle_1s_ease-in-out_infinite] border-2 py-2 px-4 bg-white border-slate-300/10 rounded-md text-center flex items-center justify-center gap-2 sm:text-lg text-[1rem] md:text-2xl" href="mailto:mailto:jinsei0004@gmail.com">
                <EmailIcon></EmailIcon> Let&apos;s work together!
            </a>
        </>
    )
}