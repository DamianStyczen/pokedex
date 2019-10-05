import { PokemonState } from './../store';
import {
    FETCH_POKEMON_LIST
} from '../actions/types';

const initialState: PokemonState = {
    list: [],
    nextUrl: ''
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                list: action.list,
                nextUrl: action.nextUrl
            }
        default:
            return state;

    }
}