import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Characters from "../pages/Characters";
import CharacterPage from "../pages/CharacterPage";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Characters/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/characters/:id" element={<CharacterPage/>}/>
            <Route path="*" element={<Characters/>}/>
        </Routes>
    );
};

export default AppRouter;
