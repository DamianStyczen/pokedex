import { PokemonState } from './../store';
import {
    FETCH_POKEMON_LIST,
    SEARCH_FOR_POKEMON
} from '../actions/types';

const initialState: PokemonState = {
    list: [],
    search: {},
    nextUrl: ''
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            const allData = [...state.list, ...action.list];
            return {
                ...state,
                list: allData,
                nextUrl: action.nextUrl
            }
        case SEARCH_FOR_POKEMON:
            return {
                ...state,
                search: {
                    ...state.search,
                    [action.query]: action.data
                }
            }
        default:
            return state;

    }
}