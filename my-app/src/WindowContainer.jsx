import React, { useState, useEffect, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Cookies from "js-cookie";
import axios from 'axios';

export const UserContext = createContext()

function WindowContainer() {

    const [currentUser, setCurrentUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userData = Cookies.get("current-user") ? Cookies.get("current-user") : false;
        if(userData){
            setCurrentUser(JSON.parse(userData))
        }
        setIsLoading(false)
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{currentUser,setCurrentUser}} >
            <Outlet context={{ currentUser, setCurrentUser }} />
        </UserContext.Provider>
    )
}

export default WindowContainer