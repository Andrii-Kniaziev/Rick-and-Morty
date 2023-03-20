import React, {FC, useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Characters from "../pages/Characters";
import CharacterPage from "../pages/CharacterPage";
import Login from "../pages/Login";
import {AuthContext} from "../context/context";

const AppRouter: FC = () => {
    const {authUser} = useContext(AuthContext);
    const deletionText = 'The app is front end only for educational purposes. It does not contain back end part and does not stores your data.';

    return (
        <div>
            {authUser.isActive
                ?
                <Routes>
                    <Route path="/delete-user" element={<div>{deletionText}</div>}/>
                    <Route path="/" element={<Characters/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/characters/:id" element={<CharacterPage/>}/>
                    <Route path="*" element={<Characters/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="/delete-user" element={<div>{deletionText}</div>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            }

        </div>
    );
};

export default AppRouter;
