import React, {FC, useContext} from 'react';
import {ICharacter} from "../types/types";
import {useNavigate} from "react-router-dom";
import {NavbarButtonsContext} from "../context/context";

interface CharacterItemProps {
    character: ICharacter
}

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
    const {isBackButtonShown, setIsBackButtonShown} = useContext(NavbarButtonsContext);
    const navigate = useNavigate();


    const navigateToCharacter = () => {
        setIsBackButtonShown(true);
        navigate(`/characters/${character.id}`)
    }

    return (
        <div className="gallery-item" onClick={navigateToCharacter}>
            <div>
                <img className="gallery-image"
                     src={character.image}
                     alt={character.name}
                />
            </div>
            <div className="gallery-item__info">
                <p>{character.name}</p>
                <p>{character.species}</p>
            </div>
        </div>
    );
};

export default CharacterItem;
