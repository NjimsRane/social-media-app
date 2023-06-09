import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();


const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        // for it to return a bool , we have to parse it 
        JSON.parse(localStorage.getItem('darkMode')) || false
    );

    // to be able to change the theme
    const toggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // after , changing the theme , it will reset our local storage to current mode
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeContextProvider };