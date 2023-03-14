export interface ICharacter {
    id: number;
    name: string;
    species: string;
    image: string;
    gender: string;
    origin: IOrigin;
    type: string;
    status: string;
}

interface IOrigin {
    name: string;
}
