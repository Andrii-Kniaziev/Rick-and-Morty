import {createContext} from "react";
import {AuthUser} from "../types/types";

export const NavbarButtonsContext = createContext({
    isBackButtonShown: false,
    setIsBackButtonShown: (value: boolean) => {}
});

export const AuthContext = createContext({
    authUser: new AuthUser(),
    setAuthUser: (value: AuthUser) => {}
});
