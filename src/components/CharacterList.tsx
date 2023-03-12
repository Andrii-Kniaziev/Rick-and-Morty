import React, {useEffect, useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import Input from "./UI/Input/Input";
import {ICharacter} from "../types/types";
import CharacterService from "../API/CharacterService";
import Loader from "./UI/Loader/Loader";
import CharacterItem from "./CharacterItem";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function sleep(miliseconds: number) {
        let currentTime = new Date().getTime();

        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }

    useEffect(() => {
        setIsLoading(true);
        CharacterService.getCharacters()
            .then(r => {
                sleep(2000);
                setCharacters(r.data)
            })
            .catch(e => alert(e))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <div>
            <Input icon={IoIosSearch} placeholder="Filter by name"/>
            {isLoading && <Loader/>}
            <div className="gallery">
                {!isLoading && characters.map(c => <CharacterItem character={c}/>)}
            </div>
        </div>
    );
};

export default CharacterList;
