import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";
import Button, {ButtonVariant} from "../Button/Button";
import {HiArrowLeft} from "react-icons/hi";
import './Navbar.scss';
import {SlLogout} from "react-icons/sl";
import {AuthContext, NavbarButtonsContext} from "../../../context/context";

const Navbar: FC = () => {
    const {isBackButtonShown, setIsBackButtonShown} = useContext(NavbarButtonsContext);
    const {setGoogleUser} = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('googleUser');
        setGoogleUser(null);
    }

    return (
        <div className="navbar">
            {
                isBackButtonShown &&
              <Link to="/characters">
                <Button icon={<HiArrowLeft/>}
                        text="GO BACK"
                        buttonVariant={ButtonVariant.NEUTRAL}
                        onClick={() => setIsBackButtonShown(false)}
                />
              </Link>
            }
            <div>
                <Button icon={<SlLogout/>}
                        text="LOG OUT"
                        buttonVariant={ButtonVariant.CLASSIC}
                        onClick={logout}/>
            </div>
        </div>
    );
};

export default Navbar;
