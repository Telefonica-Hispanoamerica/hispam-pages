import { useContext, useState } from "react"
import { PagesResultProps } from '@grapesjs/react';
import "./CustomPageManager.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PageIdContext from "../../hooks/PageContext";

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

    const { setPageId } = useContext<any>(PageIdContext);
    const [
        editableContent, 
        // setEditableContent
    ] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

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
        setPageId(page.id)
        select(page)
    }


    // const handleContentChange = (event: React.ChangeEvent<HTMLElement>) => {
    //     setEditableContent(event.target.innerText);
    // };

    const handleRename = (page: any) => {
        console.log('PAGE NAME', page)
        page.setName(editableContent);
        handleClose();
    };

    return (
        <div className="gjs-custom-page-manager">
            <div className="plus" onClick={addNewPage}>
                +
            </div>
            
            {pages.map((page) => (
                <div
                    key={page.getId()}
                    className={`page-content ${selectedId === page.getId() ? 'selected' : 'not-selected'}`}
                    onClick={() => handleFocus(page.getId())}
                    id={`page-content_${page.getId()}`}
                >                    
                    <div onClick={() => getPageId(page)}>
                        {/* <p contentEditable
                            onBlur={handleContentChange}
                            suppressContentEditableWarning={true} onFocus={() => handleRename(page)}>{page.getName() || 'Untitled page'}</p> */}
                        <p>{page.getName() || 'Untitled page'}</p>
                        <IconButton
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
                            <MenuItem onClick={() => remove(page)}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            ))}
        </div>      
    );
}
