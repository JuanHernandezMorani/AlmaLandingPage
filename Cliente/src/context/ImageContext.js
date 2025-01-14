import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [imageID, setImageID] = useState(1);

    return (
        <ImageContext.Provider value={{ imageID, setImageID }}>
            {children}
        </ImageContext.Provider>
    );
};