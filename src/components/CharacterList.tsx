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
    const [page, setPage] = useState<number>(1);
    const searchedCharacters = useMemo<ICharacter[]>(() => {
        return characters.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    }, [characters, query]);

    useEffect(() => {
        setIsLoading(true);
        const savedQuery: string | null = localStorage.getItem('characterQuery');
        if (savedQuery) {
            setQuery(savedQuery);
        }
        const savedPage: string | null = sessionStorage.getItem('page');
        if (savedPage) {
            setPage(parseInt(savedPage));
            fetchCharacters(parseInt(savedPage), true);
        } else {
            fetchCharacters(page, true);
        }

    }, []);

    function fetchCharacters(page: number, isFirstLoad: boolean) {
        const characterPortion = isFirstLoad ? [1, page * 8] : [page, 8]
        CharacterService.getCharacters(characterPortion[0], characterPortion[1])
            .then(r => setCharacters(
                [...characters, ...r.data].sort((c1, c2) => c1.name.localeCompare(c2.name)))
            )
            .catch(e => alert(e))
            .finally(() => setIsLoading(false));
    }

    function addCharacters() {
        setPage(page + 1);
        sessionStorage.setItem('page', String(page + 1));
        fetchCharacters(page + 1, false);
    }

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        localStorage.setItem('characterQuery', event.target.value);
        setQuery(event.target.value);
    }

    if (isLoading && page === 1) {
        return (
            <Loader/>
        );
    }

    return (
        <div className="gallery__container">
            <Input defaultValue={query}
                   icon={IoIosSearch}
                   placeholder="Filter by name"
                   onChange={handleQueryChange}
            />
            <div className="gallery">
                {searchedCharacters.map(character => <CharacterItem key={character.id} character={character}/>)}
                <div className="gallery-item gallery-item__add-element" onClick={addCharacters}>
                    <span>SHOW MORE</span>
                </div>
            </div>
        </div>
    );
};

export default CharacterList;
