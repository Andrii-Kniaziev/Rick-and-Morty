import {ICharacter} from "../types/types";
import axios from "axios";

export default class CharacterService {
    static async getCharacters(page: number = 1, limit: number = 8) {
        const startingPoint: number = (page - 1) * limit;
        const portion: number[] = [...new Array(limit)].map((value, index) => startingPoint + index + 1);

        return await axios
            .get<ICharacter[]>(`https://rickandmortyapi.com/api/character/${portion.join(',')}`);

    }
}
