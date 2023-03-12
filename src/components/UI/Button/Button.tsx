import React, { FC, MouseEventHandler, ReactElement } from 'react';
import { IconContext } from 'react-icons';
import './Button.css'

interface ButtonWithIconProps {
    icon?: ReactElement;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonWithIconProps> = ({ icon, text, onClick }) => (
    <button onClick={onClick} className="button">
        {icon && (
            <IconContext.Provider value={{ className: 'button-icon' }}>
                {icon}
            </IconContext.Provider>
        )}
        {text}
    </button>
);

export default Button;



