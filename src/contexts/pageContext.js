import React, { useState, createContext, useContext } from 'react';

export const PageContext = createContext();

const PageProvider = ({ children }) => {
    const [isEmpty, setIsEmpty] = useState(true);

    return(
        <PageContext.Provider value={{ isEmpty, setIsEmpty}}>
            {children}
        </PageContext.Provider>
    )
}

export function usePage() {
    const context = useContext(PageContext);
    const { isEmpty, setIsEmpty, } = context;
    return { isEmpty, setIsEmpty };
}

export default PageProvider;