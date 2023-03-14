import React, {FC} from 'react';
import {ICharacter} from "../types/types";
import {useNavigate} from "react-router-dom";

interface CharacterItemProps {
    character: ICharacter
}

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
    const navigate = useNavigate();


    const navigateToCharacter = () => {
        navigate(`/characters/${character.id}`)
    }

    return (
        <div className="gallery-item" onClick={navigateToCharacter}>
            <div>
                <img className="gallery-item__image"
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
