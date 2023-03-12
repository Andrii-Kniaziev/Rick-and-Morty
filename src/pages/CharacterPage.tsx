import React, {useEffect, useState} from 'react';
import {ICharacter} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import CharacterService from "../API/CharacterService";

type CharacterPageParams = {
    id: string;
}

const CharacterPage = () => {
    const [character, setCharacter] = useState<ICharacter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const params = useParams<CharacterPageParams>();
    const navigate = useNavigate();

    console.log(params.id)

    useEffect(() => {
        fetchCharacter();
    }, []);

    function fetchCharacter() {
        setIsLoading(true);
        CharacterService.getCharacter(params.id)
            .then(r => setCharacter(r.data))
            .catch(e => alert(e))
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <img src={character?.image} alt="Alternative text"/>
            <p>{character?.name}</p>
            <p>{character?.species}</p>
        </div>
    );
};

export default CharacterPage;
