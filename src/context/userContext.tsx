import React from "react";
import { FC, PropsWithChildren, createContext, useState } from "react"
import { Product } from "../pages/ProductPage";

export interface User {
    name: string,
    Email: string,
    Password: string,
    Cart: Product[],
    Wishlist: Product[],
    Id: number
}

interface UserContextType {
    userData: User | null,
    setUserData: Function
}

export const UserContext = createContext({} as UserContextType);


export const UserContextProvider:FC<PropsWithChildren<{}>> = ({children}) => {
    const [userData, setUserData] = useState(null)
    return (
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
    )
    }
