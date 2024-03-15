import { useState, useRef, useEffect } from 'react'
import { StylesResultProps } from '@grapesjs/react';
import { mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import { MAIN_BG_COLOR } from './common';
import StylePropertyField from '../StylePropertyField';
import './CustomStyleManager.scss'

const accordionIcon = <Icon path={mdiMenuDown} size={0.7} />;

export default function CustomStyleManager({
    sectors,
}: Omit<StylesResultProps, 'Container'>) {

    const [content, setContent] = useState(''); // Contenido del div
    const [height, setHeight] = useState(100); // Altura inicial del div

    useEffect(() => {
        const divHeight = (document.getElementById('myDiv')as HTMLInputElement).scrollHeight;
        setHeight(divHeight);
    }, [content]); // Actualiza la altura cuando el contenido cambia

    const handleChange = (event: any) => {
        setContent(event.target.value);
    };

    return (
        <div className="gjs-custom-style-manager" id='myDiv'>
            <textarea value={content} onChange={handleChange} />
            <p>Altura del div: {height}px</p>
            {sectors.map((sector) => (
                <Accordion key={sector.getId()} disableGutters>
                    <AccordionSummary
                        className="!bg-slate-800"
                        expandIcon={accordionIcon}
                    >
                        {sector.getName()}
                    </AccordionSummary>
                    <AccordionDetails className={`flex flex-wrap`}>
                        {sector.getProperties().map((prop) => (
                        <StylePropertyField key={prop.getId()} prop={prop} />
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}