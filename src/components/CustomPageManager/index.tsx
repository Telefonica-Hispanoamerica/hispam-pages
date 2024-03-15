// function CustomPageManager() {
//     return (
//         <></>
//     )
// }

// export default CustomPageManager

import { useEffect, useState } from "react"
import { PagesResultProps } from '@grapesjs/react';
import "./CustomPageManager.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

type PropsLandingPage = {
	id: number,
	name: string,
	styles: string,
	component: string,
}

export default function CustomPageManager({
    pages,
    selected,
    add,
    select,
    remove,
}: PagesResultProps) {

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

    return (
        <div className="gjs-custom-page-manager">
            <div className="plus" onClick={addNewPage}>
                +
            </div>
            
            {pages.map((page, index) => (
                <div
                    key={page.getId()}
                    className="page-content"
                >                    
                    <div onClick={() => select(page)}>
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
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Rename</MenuItem>
                            <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                            <MenuItem onClick={() => remove(page)}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            ))}
        </div>
    );
}
