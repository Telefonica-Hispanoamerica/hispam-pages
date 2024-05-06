import React, { createContext, useState, useEffect } from 'react';

interface Item {
    id: number;
    name: string;
    styles: string;
    component: string;
}

interface ContextValue {
    items: Item[];
    removeItem: (id: number) => void;
    addItem: (item: Item) => void;
}

const PageContext = createContext<ContextValue>({
    items: [],
    removeItem: () => {},
    addItem: () => {},
});

const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchMyAPI() {
			try {
				const response = await fetch('https://hispam-pages-backend.onrender.com/get-html');
                //const response = await fetch('http://localhost:3000/get-html');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const jsonData = await response.json();
				console.log("updatedData CONTXT", jsonData);
                const hasDefaultItem = jsonData.some((item: Item) => item.id === 0);
                const updatedData = hasDefaultItem ? jsonData : [items[0], ...jsonData];

                setItems(updatedData);
			} catch (error) {
				console.error('Error al obtener el HTML desde el backend', error);
			}
		}

		fetchMyAPI()
    }, []);

    console.log("ITEMS CONTEXT", items)

    const removeItem = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const addItem = (item: Item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const value: ContextValue = {
        items,
        removeItem,
        addItem,
    };

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export { PageContext, PageProvider };