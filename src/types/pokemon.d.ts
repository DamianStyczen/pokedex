export default interface Pokemon {
    name: string;
    url: string;
    abilities?: Array<any>;
    base_experience?: number;
    forms?: Array<any>;
    game_indices?: Array<any>;
    height?: number;
    held_items?: Array<any>;
    id?: number;
    is_default: boolean;
    location_area_encounters?: string;
    moves?: Array<any>;
    order?: number;
    species?: Object;
    sprites?: {
        front_default: string;
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
    }
    stats?: Array<any>;
    types?: Array<any>;
    weight?: number;
}