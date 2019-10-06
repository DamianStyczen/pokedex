import { PokemonState } from './../store';
import {
    FETCH_POKEMON_LIST,
    FILTER_POKEMON_LIST
} from '../actions/types';

const initialState: PokemonState = {
    list: [],
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
        case FILTER_POKEMON_LIST:
            return {
                ...state,
                list: action.list,
                nextUrl: ''
            }
        default:
            return state;

    }
}