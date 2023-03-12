import React, {useEffect, useState} from 'react';
import {ICharacter} from "../types/types";
import {Link, useNavigate, useParams} from "react-router-dom";
import CharacterService from "../API/CharacterService";
import Button from "../components/UI/Button/Button";
import {HiArrowLeft} from "react-icons/hi";

type CharacterPageParams = {
    id: string;
}

const CharacterPage = () => {
    const [character, setCharacter] = useState<ICharacter | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const params = useParams<CharacterPageParams>();
    const navigate = useNavigate();

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
            <div className="gallery-button__back">
                <Link to="/characters">
                    <Button icon={<HiArrowLeft />} text="GO BACK" />
                </Link>
            </div>
            <img className="character-image" src={character?.image} alt="Alternative text"/>
            <p>{character?.name}</p>
            <p>{character?.species}</p>
        </div>
    );
};

export default CharacterPage;
