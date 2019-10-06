import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    FETCH_POKEMON_LIST,
    FILTER_POKEMON_LIST
} from './types';
import Pokemon from '../types/pokemon';
import { Dispatch } from 'redux';

export const fetchPokemon = (nextUrl?: string) => (dispatch: Dispatch) => {
    fetch(nextUrl || 'https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(({ results, next }) => {
            const allDetailsFetches = results.map(
                (pokemon: Pokemon, index: number) => fetchDetails(results, pokemon, index)
            );

            Promise.all(allDetailsFetches)
                .then(() => {
                    dispatch({
                        type: FETCH_POKEMON_LIST,
                        list: results,
                        nextUrl: next
                    })
                })
        });
}

export const filterPokemon = (filter: string) => (dispatch: Dispatch) => {
    fetch(`https://pokeapi.co/api/v2/type/${filter}`)
        .then(res => res.json())
        .then(({ pokemon: results }) => {
            console.log({ results });
            const allDetailsFetches = results.map(
                (item: any, index: number) => fetchDetails(results, item.pokemon, index)
            );

            Promise.all(allDetailsFetches)
                .then(() => {
                    dispatch({
                        type: FILTER_POKEMON_LIST,
                        list: results,
                        nextUrl: ''
                    })
                })
        });
}

const fetchDetails = (
    results: Array<Pokemon>,
    pokemon: Pokemon,
    index: number
): Promise<Response> => fetch(pokemon.url)
    .then(res => res.json())
    .then(details => results[index] = details) 