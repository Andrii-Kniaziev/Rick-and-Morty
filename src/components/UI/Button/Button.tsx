import React, {FC, MouseEventHandler, ReactElement} from 'react';
import {IconContext} from 'react-icons';
import './Button.css'

export enum ButtonVariant {
    NEUTRAL = 'neutral',
    CLASSIC = 'classic',
}

interface ButtonWithIconProps {
    icon?: ReactElement;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    buttonVariant: ButtonVariant
}

const Button: FC<ButtonWithIconProps> = ({icon, text, buttonVariant, onClick}) => {

    let variant: string;
    switch (buttonVariant) {
        case ButtonVariant.NEUTRAL: variant = ButtonVariant.NEUTRAL; break;
        case ButtonVariant.CLASSIC: variant = ButtonVariant.CLASSIC; break;
    }

    console.log(variant)

    return (
        <button onClick={onClick} className={`button ${variant}`}>
            {icon && (
                <IconContext.Provider value={{className: 'button-icon'}}>
                    {icon}
                </IconContext.Provider>
            )}
            {text}
        </button>
    );
}

export default Button;



