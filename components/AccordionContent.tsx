import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionContentProps = {
    content: any, // fix this
    panelName: string,
}

export default function AccordionContent({ content, panelName }: AccordionContentProps) {
    return (
        <>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelName}bh-content`}
                id={`${panelName}bh-header`}
            >
                <p className='w-1/3 shrink-0 text-lg md:text-2xl'>Vtuber</p>
                <p className='text-slate-900/50 text-lg md:text-2xl'>Starts at $$$</p>

            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* <p className="text-xl">Head only</p>
                <img alt="..." src="/chimez.jpg"></img>
                <p>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </p>

                <p className="text-xl">With Body</p>
                <img alt="..." src="/chimez.jpg"></img>
                <p>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </p> */}
            </AccordionDetails>
        </>
    )
}