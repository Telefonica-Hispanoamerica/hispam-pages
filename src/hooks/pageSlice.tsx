import React, { createContext, useState, useEffect } from 'react';
import { Editor } from 'grapesjs';

interface Item {
    id: number;
    name: string;
    styles: string;
    component: string;
}

export interface Tag {
    id: string;
    tag: string
}

interface ContextValue {
    items: Item[];
    removeItem: (id: number) => void;
    addItem: (item: Item) => void;
    metaDescription: string;
    addMetaDescription: (meta: string) => void;
    tagsKeywords: Tag[],
    addTagsKeywords: (tag: Tag) => void;
    removeTagKeyword: (id: string) => void;
    pageIdSelected: string;
    getPageIdSelected: (pageId: string) => void;
    editorContext: Editor | null;
    getEditorContext: (editor: Editor) => void
}

const PageContext = createContext<ContextValue>({
    items: [],
    removeItem: () => {},
    addItem: () => {},
    metaDescription: '',
    addMetaDescription: () => {},
    tagsKeywords: [],
    addTagsKeywords: () => {},
    removeTagKeyword: () => {},
    pageIdSelected: '',
    getPageIdSelected: () => {},
    editorContext: null,
    getEditorContext: () => {}
});

const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const [ items, setItems ] = useState<Item[]>([]);
    const [ metaDescription, setMetaDescription ] = useState<string>('');
    const [ pageIdSelected, setPageIdSelected ] = useState<string>('');
    const [ editorContext, setEditorContext ] = useState<Editor | null>(null);
    const [ tagsKeywords, setTagsKeywords ] = useState<Tag[]>([]);

    useEffect(() => {
        async function fetchMyAPI() {
			try {
				// const response = await fetch('https://hispam-pages-backend.onrender.com/get-html');
                const response = await fetch('http://localhost:3000/get-html');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const jsonData = await response.json();
                const hasDefaultItem = jsonData.some((item: Item) => item.id === 0);
                const updatedData = hasDefaultItem ? jsonData : [items[0], ...jsonData];
                if(updatedData[0] == undefined){
                    const dateNumber = Date.now()
                    let pageBlank = [{
                        id: dateNumber,
                        name: `Page Blank`,
                        styles: '',
                        component: `<h1>Page content Blank</h1>`,
                    }];

                    setItems(pageBlank);
                } else {
                    setItems(updatedData);
                }
                
			} catch (error) {
				const dateNumber = Date.now()
                    let pageBlank = [
                        {
                        id: dateNumber,
                        name: `Page Blank`,
                        styles: '',
                        component: `<h1>Page content Blank</h1>`,
                    }
                ];

                setItems(pageBlank);
			}
		}

		fetchMyAPI();
    }, []);

    const removeItem = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const addItem = (item: Item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const addMetaDescription = (newValue: string) => {
        setMetaDescription(newValue);
    };

    const getPageIdSelected = (id: string) => {
        setPageIdSelected(id)
    };

    const getEditorContext = (editor: Editor) => {
        setEditorContext(editor);
    }

    const addTagsKeywords = (tag: Tag) => {
        setTagsKeywords((prevTags) => [...prevTags, tag]);
    }

    const removeTagKeyword = (id: string) => {
        setTagsKeywords((prevTags) => prevTags.filter((tag) => tag.id !== id ))
    }

    const value: ContextValue = {
        items,
        removeItem,
        addItem,
        metaDescription,
        addMetaDescription,
        tagsKeywords,
        addTagsKeywords,
        removeTagKeyword,
        pageIdSelected,
        getPageIdSelected,
        editorContext,
        getEditorContext
    };

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export { PageContext, PageProvider };