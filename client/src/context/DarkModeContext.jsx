import { createContext, useEffect, useState } from "react";


// let create a context and to use the context , we need a provider
export const DarkModeContext = createContext();

// context provider to be able to use to use the context , and the context provider , will use it to wrapp our all App
export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        // for it to returna bool , we have to parse it 
        JSON.parse(localStorage.getItem('darkMode')) || false
    );


    // to be able to change the theme
    const toggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // after , changing the theme , it will reset our local storage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};