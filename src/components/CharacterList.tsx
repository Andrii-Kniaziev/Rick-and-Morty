import React, {useEffect, useMemo, useState} from 'react';
import {IoIosSearch} from "react-icons/io";
import Input from "./UI/Input/Input";
import {ICharacter} from "../types/types";
import CharacterService from "../API/CharacterService";
import Loader from "./UI/Loader/Loader";
import CharacterItem from "./CharacterItem";

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const searchedCharacters = useMemo<ICharacter[]>(() => {
        return characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    }, [characters, query]);

    useEffect(() => {
        setIsLoading(true);
        const savedQuery: string | null = localStorage.getItem('characterQuery');
        if (savedQuery) {
            setQuery(savedQuery);
        }
        fetchCharacters();
    }, []);

    function fetchCharacters() {
        CharacterService.getCharacters()
            .then(r => setCharacters(r.data.sort((c1, c2) => c1.name.localeCompare(c2.name))))
            .catch(e => alert(e))
            .finally(() => setIsLoading(false));
    }

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        localStorage.setItem('characterQuery', event.target.value);
        setQuery(event.target.value);
    }

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <div>
            <Input defaultValue={query}
                   icon={IoIosSearch}
                   placeholder="Filter by name"
                   onChange={handleQueryChange}
            />
            <div className="gallery">
                {searchedCharacters.map(character => <CharacterItem key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export default CharacterList;
