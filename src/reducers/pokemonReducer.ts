import { PokemonState } from './../store';
import {
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR,
    FILTER_POKEMON_LIST_START,
    FILTER_POKEMON_LIST_SUCCESS,
    FILTER_POKEMON_LIST_ERROR
} from '../actions/types';

const initialState: PokemonState = {
    list: [],
    nextUrl: '',
    status: ''
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMON_LIST_START:
            return {
                ...state,
                status: 'PROGRESS'
            }
        case FETCH_POKEMON_LIST_ERROR:
            return {
                ...state,
                status: 'ERROR'
            }
        case FETCH_POKEMON_LIST_SUCCESS:
            const { list, isContinuation, nextUrl } = action;
            const newList = isContinuation ? [...state.list, ...list] : list;

            return {
                ...state,
                list: newList,
                nextUrl,
                status: 'SUCCESS'
            }
        case FILTER_POKEMON_LIST_START:
            return {
                ...state,
                status: 'PROGRESS'
            }
        case FILTER_POKEMON_LIST_ERROR:
            return {
                ...state,
                status: 'ERROR'
            }
        case FILTER_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                nextUrl: '',
                status: 'SUCCESS'
            }
        default:
            return state;

    }
}