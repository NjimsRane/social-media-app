import { useState, createContext, useEffect } from 'react';
import axios from 'axios';



const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        // localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (values) => {
        const res = await axios.post("http://localhost:8080/api/auths/login", values, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);


    return (
        <UserContext.Provider value={{ login, currentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };