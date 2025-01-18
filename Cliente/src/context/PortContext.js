import React, { createContext, useState } from 'react';

export const PortContext = createContext();

export const PortProvider = ({ children }) => {
    const [portID, setPortID] = useState(1);

    return (
        <PortContext.Provider value={{ portID, setPortID }}>
            {children}
        </PortContext.Provider>
    );
};