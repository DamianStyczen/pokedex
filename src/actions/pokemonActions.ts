import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    FETCH_POKEMON_LIST
} from './types';
import Pokemon from '../types/pokemon';

export const fetchPokemon = (nextUrl?: string) => (dispatch: any) => {
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
                    saveDataToLocalStorage('pokemon.list', results);
                    dispatch({
                        type: FETCH_POKEMON_LIST,
                        list: results,
                        nextUrl: next
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