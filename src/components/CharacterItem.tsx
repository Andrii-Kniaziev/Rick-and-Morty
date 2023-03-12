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
            {character.name}
            {character.species}
        </div>
    );
};

export default CharacterItem;
