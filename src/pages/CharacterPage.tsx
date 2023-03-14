import React, {useContext, useEffect, useState} from 'react';
import {ICharacter} from "../types/types";
import {useParams} from "react-router-dom";
import CharacterService from "../API/CharacterService";
import {NavbarButtonsContext} from "../context/context";
import Loader from "../components/UI/Loader/Loader";
import CharacterPageInfo from "../components/UI/CharacterPageInfo/CharacterPageInfo";

type CharacterPageParams = {
    id: string;
}

const CharacterPage = () => {
    const [character, setCharacter] = useState<ICharacter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {setIsBackButtonShown} = useContext(NavbarButtonsContext);
    const params = useParams<CharacterPageParams>();

    useEffect(() => {
        setIsLoading(true);
        setIsBackButtonShown(true);
        fetchCharacter();
    }, []);

    function fetchCharacter() {
        CharacterService.getCharacter(params.id)
            .then(r => setCharacter(r.data))
            .catch(e => alert(e))
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            {
                isLoading
                    ? <Loader/>
                    : <div className="character-page__container">
                        <img className="character-page__image" src={character?.image} alt="Alternative text"/>
                        <h1>{character?.name}</h1>
                        <p>Informations</p>
                    </div>
            }
            {
                !isLoading && <CharacterPageInfo character={character}/>
            }
        </div>
    );
};

export default CharacterPage;
