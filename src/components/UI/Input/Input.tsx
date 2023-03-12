import React, {InputHTMLAttributes, FC} from "react";
import {IconType} from "react-icons";
import"./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
}

const Input: FC<InputProps> = ({icon: Icon, ...rest}) => {
    return (
        <div>
            <div className="input-container">
                <input className="input" {...rest} />
                {Icon && <div className="input-icon"><Icon/></div>}
            </div>
        </div>
    );
};

export default Input;
