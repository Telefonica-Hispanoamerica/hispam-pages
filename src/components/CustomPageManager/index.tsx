import { useContext, useState } from "react"
import { PagesResultProps } from '@grapesjs/react';
import "./CustomPageManager.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
// import PageIdContext from "../../hooks/PageContext";

import { PageContext } from '../../hooks/pageSlice'

// type PropsLandingPage = {
// 	id: number,
// 	name: string,
// 	styles: string,
// 	component: string,
// }

export default function CustomPageManager({
    pages,
    // selected,
    add,
    select,
    remove,
}: PagesResultProps) {

    const [
        editableContent, 
        // setEditableContent
    ] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { items, removeItem } = useContext(PageContext);
	const [newItemName, setNewItemName] = useState('');

    const handleFocus = (id: string) => {
        setSelectedId(id);
    };

    const addNewPage = () => {
        const nextIndex = pages.length + 1;
        add({
            name: `Page ${nextIndex}`,
            component: `<h1>Page content ${nextIndex}</h1>`,
        });
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getPageId = (page: any) => {
        // setPageId(page.id)
        select(page)
    }

    const handleRemoveItem = (id: any) => {
        const removePage = pages.filter( page => page.id === id);
        remove(removePage[0])
        removeItem(id);
        setAnchorEl(null);
        removeHTML(id);
    };

    const removeHTML = async (id: any) => {
        try {            
            //const response = await fetch(`http://localhost:3000/remove-html/${id}`, {
            const response = await fetch(`https://hispam-pages-backend.onrender.com/remove-html/${id}`, {
              method: 'DELETE'
            });
            const data = await response.json();
            console.log(data); // Maneja la respuesta del servidor
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // const handleContentChange = (event: React.ChangeEvent<HTMLElement>) => {
    //     setEditableContent(event.target.innerText);
    // };

    const handleRename = (page: any) => {
        page.setName(editableContent);
        handleClose();
    };

    console.log("PAGES", pages)

    return (
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
                        
                        {/* <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => handleRename(page)}>Rename</MenuItem>
                            <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                            <MenuItem onClick={() => handleRemoveItem(page.id)}>Delete</MenuItem>
                        </Menu> */}
                    </div>
                </div>
            ))}
        </div>      
    );
}
