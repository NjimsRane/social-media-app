import { useState, createContext, useEffect } from 'react';
import { lady1 } from '../assets';



const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        setCurrentUser({
            id: 1,
            name: 'Njims Rane',
            profilPic: lady1
        });
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);


    return (
        <UserContext.Provider value={{ login, currentUser }}>{children}</UserContext.Provider>
    );
};

export { UserProvider, UserContext };