import React, {FC} from 'react';
import {ICharacter} from "../types/types";

interface CharacterItemProps {
    character: ICharacter
}

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
    return (
        <div className="gallery-item">
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
