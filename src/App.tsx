import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import {HashRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import {NavbarButtonsContext, AuthContext} from './context/context';
import AppRouter from "./components/AppRouter";
import {AuthUser} from "./types/types";

function App() {
    const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);
    const [authUser, setAuthUser] = useState(new AuthUser());

    useEffect(() => {
        const user = localStorage.getItem('authUser')

        if (user) {
            const parsedUser = JSON.parse(user);
            setAuthUser(new AuthUser(parsedUser.provider, parsedUser.name, parsedUser.picture, true));
        }
    }, []);

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            <NavbarButtonsContext.Provider value={{isBackButtonShown, setIsBackButtonShown}}>
                <HashRouter>
                    { authUser.isActive && <Navbar/> }
                    <AppRouter/>
                </HashRouter>
            </NavbarButtonsContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
