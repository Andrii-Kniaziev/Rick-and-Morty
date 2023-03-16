import {createContext} from "react";

export const NavbarButtonsContext = createContext({
    isBackButtonShown: false,
    setIsBackButtonShown: (value: boolean) => {}
});

export const AuthContext = createContext({
    googleUser: null,
    setGoogleUser: (value: any) => {}
});
