import React, {FC} from 'react';
import {ICharacter} from "../../../types/types";
import './CharacterPageInfo.scss';

interface CharacterPageInfoProps {
    character: ICharacter | null
}

type FieldUnit = [string, string | undefined];

const CharacterPageInfo: FC<CharacterPageInfoProps> = ({character}) => {
    const fields: FieldUnit[] = [
        ['Gender', character?.gender],
        ['Status', character?.status],
        ['Specie', character?.species],
        ['Origin', character?.origin.name],
        ['Type', character?.type],
    ];

    return (
        <div className="character-data__container">
            {
                fields.map(field =>
                    <div key={field[0]} className="character-data__unit">
                        <p>{field[0]}</p>
                        <p>{field[1] || 'Unknown'}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CharacterPageInfo;
