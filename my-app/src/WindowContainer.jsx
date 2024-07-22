import React, { useState, useEffect, createContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import axios from 'axios';

export const UserContext = createContext()

function WindowContainer() {

    const [currentUser, setCurrentUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const userData = Cookies.get("current-user") ? Cookies.get("current-user") : false;
        if(userData){
            setCurrentUser(JSON.parse(userData))
        }else navigate("/login")
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