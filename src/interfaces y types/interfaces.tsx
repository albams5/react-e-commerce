export interface Product {
    name: string,
    Collection: string,
    Rating: number,
    Price: number,
    Id: string,
    Image: string,
    Colors: string[],
    Category: string,
    Quantity: number
}

export interface User {
    name: string,
    Email: string,
    Password: string,
    Cart: Product[],
    Wishlist: Product[],
    Id: number
}

export type Errors = {
    name: string,
    password: string
  }
  
export type UserInput = {
    userName: string,
    password: string
  }

export interface UserContextType {
    userData: User | null,
    setUserData: Function
}