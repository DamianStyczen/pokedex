import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR,
    FILTER_POKEMON_LIST_START,
    FILTER_POKEMON_LIST_SUCCESS,
    FILTER_POKEMON_LIST_ERROR
} from './types';
import Pokemon from '../types/pokemon';
import { Dispatch } from 'redux';

export const fetchPokemon = (nextUrl?: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: FETCH_POKEMON_LIST_START
    });

    try {
        const response = await fetch(nextUrl || 'https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        const { results: list, next } = data;

        const allPromises = list.map(
            (pokemon: Pokemon, index: number) => fetchDetails(list, pokemon, index)
        );

        await Promise.all(allPromises);

        dispatch({
            type: FETCH_POKEMON_LIST_SUCCESS,
            list,
            nextUrl: next,
            isContinuation: !!nextUrl
        });


    } catch {
        dispatch({
            type: FETCH_POKEMON_LIST_ERROR
        });
    }
}

export const filterPokemon = (filter: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: FILTER_POKEMON_LIST_START
    });

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${filter}`);
        const data = await response.json();
        const { pokemon } = data;
        const list = pokemon.map((item: any) => item.pokemon);

        const allPromises = list.map(
            (pokemon: Pokemon, index: number) => fetchDetails(list, pokemon, index)
        );

        await Promise.all(allPromises);

        dispatch({
            type: FILTER_POKEMON_LIST_SUCCESS,
            list,
            nextUrl: ''
        });


    } catch {
        dispatch({
            type: FILTER_POKEMON_LIST_ERROR
        });
    }
}

const fetchDetails = async (
    list: Array<Pokemon>,
    pokemon: Pokemon,
    index: number
): Promise<Response> => {
    const response = await fetch(pokemon.url);
    const details = await response.json();
    list[index] = details;
    return;
}