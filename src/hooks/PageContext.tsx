import { useState, createContext } from 'react'

const PageIdContext = createContext<any>(null);

const PageIdProvider = ({children}: {children: React.ReactNode}) => {

    const [ pageId, setPageId ] = useState(0)

    const data = {
        pageId,
        setPageId
    }

    return (
        <PageIdContext.Provider value={data}>
            {children}
        </PageIdContext.Provider>
    )
}

export { PageIdProvider }
export default PageIdContext;