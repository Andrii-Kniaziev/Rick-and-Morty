import {createContext} from "react";

export const NavbarButtonsContext = createContext({
    isBackButtonShown: false,
    setIsBackButtonShown: (value: boolean) => {}
});
