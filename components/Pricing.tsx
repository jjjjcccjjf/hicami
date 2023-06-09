import { Key } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SyntheticEvent, useState } from 'react';
import AccordionContent from './AccordionContent';
import WorkItem from './WorkItem';
import FadeInSection from './FadeInSection';

export default function Pricing({ pricing }: any) { //todo fix this
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <section className="bg-red-100  flex justify-content items-center flex-col py-2 md:py-4">
                <div className="w-5/6 md:py-4">
                    <h2 id="pricing" className="md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-6xl">Pricing</h2>
                </div>
                <div className="w-5/6 py-6">

                    {pricing.map((item: any, key: Key) => {
                        return (
                            <FadeInSection key={key}>
                                <Accordion  expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <p className='w-1/3  shrink-0 text-lg  md:text-2xl'>{item.heading}</p>
                                        <p className='text-slate-900/50 text-lg  md:text-2xl w-full text-right'>{item.price}</p>

                                    </AccordionSummary>
                                    <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {item.subSections.map((subItem: any, subKey: Key) => {
                                            return (<div key={subKey} className="flex flex-col items-center m-auto gap-4 lg:w-2/3 2xl:w-1/2">
                                                <h3 className="text-lg md:text-2xl">{subItem.subHeading}</h3>
                                                <WorkItem item={subItem} className="md:w-1/2 lg:w-2/3 2xl:w-1/2"></WorkItem>
                                                <p className="xl:text-lg">{subItem.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsum iure quod deleniti. Molestiae possimus recusandae quod soluta repellendus culpa sapiente. Dolorem cupiditate, perspiciatis sequi nesciunt consequatur unde mollitia quos.</p>
                                            </div>
                                            )
                                        })}

                                    </AccordionDetails>
                                </Accordion>
                            </FadeInSection>
                        )
                    })}

                    {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <p className='w-1/3 shrink-0 text-lg md:text-2xl'>Vtuber</p>
                            <p className='text-slate-900/50 text-lg md:text-2xl'>Starts at $$$</p>

                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <p className="text-xl">Head only</p>
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
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <p className='w-1/3 shrink-0 text-lg md:text-2xl'>Chibi</p>
                            <p className='text-slate-900/50 text-lg md:text-2xl'>Starts at $$$</p>

                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <img alt="..." src="/chimez.jpg"></img>
                            <p>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <p className='w-1/3 shrink-0 text-lg md:text-2xl'>Chibi</p>
                            <p className='text-slate-900/50 text-lg md:text-2xl'>Starts at $$$</p>

                        </AccordionSummary>
                        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <img alt="..." src="/chimez.jpg"></img>
                            <p>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </p>
                        </AccordionDetails>
                    </Accordion> */}

                </div>
            </section>
        </>
    )
}