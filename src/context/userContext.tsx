import { FC, PropsWithChildren, createContext, useContext, useState } from "react"

export interface User {
    name: string,
    Email: string,
    Password: string,
    Cart: string[],
    Wishlist: string[],
    Id: number
}

interface UserContext {
    user: User[],
    setUser: Function
  }

const user = createContext({} as UserContext)
export const UserContext:FC<PropsWithChildren<{}>> = ({children}) => {
    const [userData, setUserData] = useState([])
    return (
    <user.Provider value={{ user: userData, setUser: setUserData }}>
        {children}
    </user.Provider>
    )
    }

export const useHandleUser = () => {
    const myUser = useContext(user);
    if(!myUser){
        throw new Error;
    }
    return myUser;
}