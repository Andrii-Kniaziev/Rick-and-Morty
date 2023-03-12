import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterPage from "./pages/CharacterPage";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            {/*<Navbar/>*/}
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
