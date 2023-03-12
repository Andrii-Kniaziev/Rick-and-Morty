import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {HiArrowLeft} from "react-icons/hi";
import './Navbar.css';

const Navbar: FC = () => {
    return (
        <div className="navbar">
            <Link to="/characters">
                <Button icon={<HiArrowLeft />} text="GO BACK" />
            </Link>
        </div>
    );
};

export default Navbar;
