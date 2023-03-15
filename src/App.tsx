import React, {useState} from 'react';
import './styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterPage from "./pages/CharacterPage";
import Navbar from "./components/UI/Navbar/Navbar";
import {NavbarButtonsContext} from './context/context';

function App() {
    const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);

    return (
        <NavbarButtonsContext.Provider value={{isBackButtonShown, setIsBackButtonShown}}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Characters/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/characters/:id" element={<CharacterPage/>}/>
                    <Route path="*" element={<Characters/>}/>
                </Routes>
            </BrowserRouter>
        </NavbarButtonsContext.Provider>
    );
}

export default App;
