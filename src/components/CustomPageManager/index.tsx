import { useContext, useState } from "react"
import { PagesResultProps } from '@grapesjs/react';
import "./CustomPageManager.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import { styles } from './templateCSS';
import { component } from './templateHTML'

import { PageContext } from '../../hooks/pageSlice';

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#0B2739",
	boxShadow: 24,
	p: 4,
	borderRadius: 4,
};


export default function CustomPageManager({
    pages,
    // selected,
    add,
    select,
    remove,
}: PagesResultProps) {

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { removeItem } = useContext(PageContext);
    const [ open, setOpen ] = useState(true);
	const handleClose = () => setOpen(false);

    const handleFocus = (id: string) => {
        setSelectedId(id);
    };

    const addNewPage = (pages: any) => {
        const nextIndex = pages.length + 1;
        const dateNumber = Date.now()
        add(
            // {
            //     id: dateNumber.toString(),
            //     name: `Page ${nextIndex}`,
            //     component: `<h1>Page content ${nextIndex}</h1>`,
            // }
            {
                id: dateNumber.toString(),
                name: `Template Landing Page ${nextIndex}`,
                styles: styles,
                component: component
                
            }
        );
        console.log("PAGES", pages)
    };

    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // console.log(anchorEl)

    const getPageId = (page: any) => {
        select(page)
    }

    const handleRemoveItem = (id: any) => {
        const removePage = pages.filter( page => page.id === id);
        remove(removePage[0])
        removeItem(id);
        //setAnchorEl(null);
        removeHTML(id);
    };

    const removeHTML = async (id: any) => {
        try {            
            const response = await fetch(`http://localhost:3000/remove-html/${id}`, {
            //const response = await fetch(`https://hispam-pages-backend.onrender.com/remove-html/${id}`, {
              method: 'DELETE'
            });
            const data = await response.json();
            console.log(data); // Maneja la respuesta del servidor
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="modal-intro">
						<h2>¿Cómo quieres crear tu landing page?</h2>
                        {pages.map((page, index) => (
                            <div
                                key={page.getId()}
                                className={`choose-template`}
                                onClick={() => handleFocus(page.getId())}
                                id={`page-content_${page.getId()}`}
                            >                    
                                <div onClick={() => getPageId(page)} className="btn-template">
                                    <p>{page.getName() || 'Untitled page'}</p>
                                    {/* <div className={`delete-btn ${index == 0 ? 'hidden' : ''}`} onClick={() => handleRemoveItem(page.id)}><DeleteIcon fontSize="small"/></div> */}
                                </div>
                            </div>
                        ))}
						<div className="choose-template">
							<button className="btn-template" onClick={() => addNewPage(pages)}>
								Plantilla Telefónica
							</button>
							<button className="btn-template">
								Desde cero
							</button>
						</div>
					</div>
				</Box>
			</Modal>
            <div className="gjs-custom-page-manager">
                <div className="plus" onClick={addNewPage}>
                    Add new page
                </div>
                
                {pages.map((page, index) => (
                    <div
                        key={page.getId()}
                        className={`page-content ${selectedId === page.getId() ? 'selected' : 'not-selected'}`}
                        onClick={() => handleFocus(page.getId())}
                        id={`page-content_${page.getId()}`}
                    >                    
                        <div onClick={() => getPageId(page)} className="btn-page">
                            <p>{page.getName() || 'Untitled page'}</p>
                            <div className={`delete-btn ${index == 0 ? 'hidden' : ''}`} onClick={() => handleRemoveItem(page.id)}><DeleteIcon fontSize="small"/></div>
                        </div>
                    </div>
                ))}
            </div>  
        </>            
    );
}
