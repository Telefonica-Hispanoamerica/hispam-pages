import { useEditor } from '@grapesjs/react';
import { useContext, useState } from "react";
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
    const editor = useEditor();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { getPageIdSelected, removeItem } = useContext(PageContext);
    const [ open, setOpen ] = useState(true);
	const handleClose = () => setOpen(false);

    const handleFocus = (id: string) => {
        setSelectedId(id);
    };

    const addNewPage = () => {
        const nextIndex = pages.length + 1;
        const dateNumber = Date.now()
        const newPage: any = add(
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
        console.log("NEW PAGE", newPage.id)
        openPage(newPage);
        getPageIdSelected(newPage.id)
    };

    const openPage = (page?: any) => {
        select(page);
        setOpen(false);        
    }

    const emptyPage = () => {  
        console.log("PAGE [o] empty Page", pages)
        select(pages[0]);
        setOpen(false);
        
    }

    const getPageId = (page: any) => {
        console.log("PAGE [o] getPageId", pages)
        select(page)
    }

    const handleRemoveItem = (id: any) => {
        const removePage = pages.filter( page => page.id === id);
        remove(removePage[0])
        removeItem(id);
        removeHTML(id);
    };

    const removeHTML = async (id: any) => {
        try {            
            const response = await fetch(`http://localhost:3000/remove-html/${id}`, {
            //const response = await fetch(`https://hispam-pages-backend.onrender.com/remove-html/${id}`, {
              method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
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
						<div className="choose-template">
							<button className="btn-template" onClick={addNewPage}>
								Plantilla Telefónica
							</button>
							<button className="btn-template" onClick={emptyPage}>
								Desde cero
							</button>
						</div>
					</div>
				</Box>
			</Modal>
            <div className="gjs-custom-page-manager">
                <div className="plus" onClick={addNewPage}>
                    Añadir Plantilla Telefónica
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
