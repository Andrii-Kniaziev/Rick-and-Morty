import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterPage from "./pages/CharacterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Characters/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/characters/:id" element={<CharacterPage/>}/>
                <Route path="*" element={<Characters/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
