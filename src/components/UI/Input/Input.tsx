import React, {InputHTMLAttributes, FC} from "react";
import {IconType} from "react-icons";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
}

const Input: FC<InputProps> = ({icon: Icon, ...rest}) => {
    return (
        <div className="input-container">
            <input className="input" {...rest} />
            {Icon && <div className="input-icon"><Icon/></div>}
        </div>
    );
};

export default Input;
