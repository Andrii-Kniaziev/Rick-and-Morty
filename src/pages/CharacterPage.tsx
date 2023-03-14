import React, {useContext, useEffect, useState} from 'react';
import {ICharacter} from "../types/types";
import {Link, useNavigate, useParams} from "react-router-dom";
import CharacterService from "../API/CharacterService";
import {NavbarButtonsContext} from "../context/context";

type CharacterPageParams = {
    id: string;
}

const CharacterPage = () => {
    const [character, setCharacter] = useState<ICharacter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {isBackButtonShown, setIsBackButtonShown} = useContext(NavbarButtonsContext);
    const params = useParams<CharacterPageParams>();
    const navigate = useNavigate();

    useEffect(() => {
        setIsBackButtonShown(true);
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
            <div className="character-page__header">
                <img className="character-page__image" src={character?.image} alt="Alternative text"/>
                <h1>{character?.name}</h1>
                <p>Informations</p>
            </div>

            <div>
                <p>Gender</p>
                <p>{character?.gender}</p>
            </div>
            <div>
                <p>Status</p>
                <p>{character?.status}</p>
            </div>
            <div>
                <p>Specie</p>
                <p>{character?.species}</p>
            </div>
            <div>
                <p>Origin</p>
                <p>{character?.origin.name}</p>
            </div>
            <div>
                <p>Type</p>
                <p>{character?.type || 'Unknown'}</p>
            </div>
        </div>
    );
};

export default CharacterPage;
