import { BaseInfo, PaginateInterface } from './base.interface';

interface CharacterInterface 
{
    created: string;
    gender: string;
    id: number;
    image: string;
    location: BaseInfo
    name: string;
    species: string;
    status: string;
    type: string;
    url: string;
    episode?: Array<string>;
    origin: BaseInfo
}

interface CharacterResponse
{
    info: PaginateInterface;
    results: Array<CharacterInterface>
}

export { CharacterInterface, CharacterResponse };