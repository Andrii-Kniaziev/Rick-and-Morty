import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import {HashRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import {NavbarButtonsContext, AuthContext} from './context/context';
import AppRouter from "./components/AppRouter";

function App() {
    const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);
    const [googleUser, setGoogleUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('googleUser')

        if (user) {
            setGoogleUser(JSON.parse(user));
        }
    }, []);

    return (
        <AuthContext.Provider value={{googleUser, setGoogleUser}}>
            <NavbarButtonsContext.Provider value={{isBackButtonShown, setIsBackButtonShown}}>
                <HashRouter>
                    { googleUser && <Navbar/> }
                    <AppRouter/>
                </HashRouter>
            </NavbarButtonsContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
