import React, { useState, createContext, useContext } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return(
        <CounterContext.Provider value={{ count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

export function useCounter() {
    const context = useContext(CounterContext);
    const { count, setCount, } = context;
    return { count, setCount };
}

export default CounterProvider;