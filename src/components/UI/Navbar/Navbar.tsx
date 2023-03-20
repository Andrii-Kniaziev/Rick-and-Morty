import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";
import Button, {ButtonVariant} from "../Button/Button";
import {HiArrowLeft} from "react-icons/hi";
import './Navbar.scss';
import {AuthContext, NavbarButtonsContext} from "../../../context/context";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import {AuthUser} from "../../../types/types";

const Navbar: FC = () => {
    const {isBackButtonShown, setIsBackButtonShown} = useContext(NavbarButtonsContext);
    const {authUser, setAuthUser} = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('authUser');
        setAuthUser(new AuthUser());
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
                <AvatarMenu userAvatar={authUser.picture}
                            userName={authUser.name}
                            onLogout={logout}
                />
            </div>
        </div>
    );
};

export default Navbar;
