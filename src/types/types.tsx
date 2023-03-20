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

export class AuthUser {
    provider: string;
    name: string;
    picture: string;
    isActive: boolean;

    constructor(
        provider: string = '',
        name: string = '',
        picture: string = '',
        isActive: boolean= false
    ) {
        this.provider = provider;
        this.name = name;
        this.picture = picture;
        this.isActive = isActive;
    }
}
