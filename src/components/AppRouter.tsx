import React, {FC, useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Characters from "../pages/Characters";
import CharacterPage from "../pages/CharacterPage";
import Login from "../pages/Login";
import {AuthContext} from "../context/context";

const AppRouter: FC = () => {
    const {googleUser} = useContext(AuthContext);

    return (
        <div>
            {googleUser
                ?
                <Routes>
                    <Route path="/" element={<Characters/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/characters/:id" element={<CharacterPage/>}/>
                    <Route path="*" element={<Characters/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            }

        </div>
    );
};

export default AppRouter;
