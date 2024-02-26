import { FC, PropsWithChildren, createContext, useState } from "react"
import { UserContextType } from "../interfaces y types/interfaces";


export const UserContext = createContext({} as UserContextType);


export const UserContextProvider:FC<PropsWithChildren<{}>> = ({children}) => {
    const [userData, setUserData] = useState(null)
    return (
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
    )
    }
