import React, {FC, MouseEventHandler, ReactElement} from 'react';
import {IconContext} from 'react-icons';
import './Button.scss'

export enum ButtonVariant {
    NEUTRAL = 'neutral',
    CLASSIC = 'classic',
}

interface ButtonWithIconProps {
    icon?: ReactElement;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    buttonVariant: ButtonVariant;
    isWithBorder?: boolean;
}

const Button: FC<ButtonWithIconProps> = (
    {
        icon,
        text,
        buttonVariant,
        onClick,
        isWithBorder
    }
) => {

    const determineVariant = (isWithBorder: boolean | undefined, variant: ButtonVariant): string => {
        return isWithBorder ? variant.concat(` ${variant}__border`) : variant;
    }

    let variant: string;
    switch (buttonVariant) {
        case ButtonVariant.NEUTRAL:
            variant = determineVariant(isWithBorder, ButtonVariant.NEUTRAL);
            break;
        case ButtonVariant.CLASSIC:
            variant = determineVariant(isWithBorder, ButtonVariant.CLASSIC);
            break;
        default:
            variant = ButtonVariant.NEUTRAL;
            break;
    }

    return (
        <button onClick={onClick} className={`button ${variant}`}>
            <div>
                {icon && (
                    <IconContext.Provider value={{className: 'button-icon'}}>
                        {icon}
                    </IconContext.Provider>
                )}
                <span>{text}</span>
            </div>
        </button>
    );
}

export default Button;



