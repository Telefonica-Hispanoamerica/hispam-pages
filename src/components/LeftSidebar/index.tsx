import './LeftSidebar.scss'
import CustomBlockManager from '../CustomBlockManager';
import CustomLayerManager from '../CustomLayerManager';
import CustomPageManager from '../CustomPageManager';
import {
    BlocksProvider,
    LayersProvider,
    PagesProvider
} from '@grapesjs/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

function LeftSidebar() {

    return (
        <div className="left-sidebar-column">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                Páginas
                </AccordionSummary>
                <AccordionDetails>
                    <PagesProvider>
                        {(props) => <CustomPageManager {...props} />}
                    </PagesProvider>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                Capas
                </AccordionSummary>
                <AccordionDetails>
                    <LayersProvider>
                        {(props) => <CustomLayerManager {...props} />}
                    </LayersProvider>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                Bloques
                </AccordionSummary>
                <AccordionDetails>
                    <BlocksProvider>
                        {(props) => <CustomBlockManager {...props} />}
                    </BlocksProvider>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default LeftSidebar