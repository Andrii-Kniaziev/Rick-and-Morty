import React, {useState} from 'react';
import './styles/App.scss';
import {HashRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import {NavbarButtonsContext} from './context/context';
import AppRouter from "./components/AppRouter";

function App() {
    const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);

    return (
        <NavbarButtonsContext.Provider value={{isBackButtonShown, setIsBackButtonShown}}>
            <HashRouter>
                <Navbar/>
                <AppRouter/>
            </HashRouter>
        </NavbarButtonsContext.Provider>
    );
}

export default App;
