import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
    SEARCH_FOR_POKEMON
} from './types';
import Pokemon from '../types/pokemon';
import { Dispatch } from 'redux';

export const searchStart = (query: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SEARCH_START,
        query
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: SEARCH_SUCCESS,
                data,
                query
            })
        })
        .catch(error => {
            dispatch({
                type: SEARCH_ERROR,
                query
            })
        })
}

export const searchForPokemon = (query: string) => (dispatch: Dispatch) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: SEARCH_FOR_POKEMON,
                data,
                query
            })
        })
        .catch(error => {
            console.error(error);
        })
}
