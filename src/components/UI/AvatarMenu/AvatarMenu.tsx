import React, {FC, useState} from 'react';
import "./AvatarMenu.scss"
import {FiChevronDown} from "react-icons/fi";
import Button, {ButtonVariant} from "../Button/Button";
import {SlLogout} from "react-icons/sl";

interface AvatarMenuProps {
    userAvatar: string;
    userName: string;
    onLogout: () => void
}

const AvatarMenu: FC<AvatarMenuProps> = ({ userAvatar, userName, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        onLogout();
    };

    return (
        <div className="avatar-menu">
            <div className="avatar-menu__user" onClick={handleDropdownToggle}>
                <img className="avatar-menu__icon" src={userAvatar} alt="User Avatar" />
                <span>{userName}</span>
                <FiChevronDown/>
            </div>
            {isDropdownOpen && (
                <div className="avatar-menu__dropdown">
                    <div>
                        <Button icon={<SlLogout/>}
                                text="LOG OUT"
                                buttonVariant={ButtonVariant.CLASSIC}
                                onClick={handleLogout}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvatarMenu;
