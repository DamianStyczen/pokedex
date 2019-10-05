import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    FETCH_POKEMON_LIST,
    SEARCH_FOR_POKEMON
} from './types';
import Pokemon from '../types/pokemon';
import { Dispatch } from 'redux';

export const fetchPokemon = (nextUrl?: string) => (dispatch: Dispatch) => {
    const cachedData = getDataFromLocalStorage('pokemon.list');

    if (!nextUrl && cachedData) {
        dispatch({
            type: FETCH_POKEMON_LIST,
            list: cachedData
        })

        return;
    }

    fetch(nextUrl || 'https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(({ results, next }) => {
            const allDetailsFetches = results.map(
                (pokemon: Pokemon, index: number) => fetchDetails(results, pokemon, index)
            );

            Promise.all(allDetailsFetches)
                .then(() => {
                    const allData = cachedData
                        ? [...cachedData, ...results]
                        : results;

                    try {
                        saveDataToLocalStorage('pokemon.list', allData);
                        saveDataToLocalStorage('pokemon.nextUrl', next);
                    } catch (e) {
                        console.error('Failed to cache data', e);
                    }
                    dispatch({
                        type: FETCH_POKEMON_LIST,
                        list: results,
                        nextUrl: next
                    })
                })
        });
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

const fetchDetails = (
    results: Array<Pokemon>,
    pokemon: Pokemon,
    index: number
): Promise<Response> => fetch(pokemon.url)
    .then(res => res.json())
    .then(details => results[index] = details) 