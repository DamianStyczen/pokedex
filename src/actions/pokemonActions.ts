import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    FETCH_POKEMON_LIST
} from './types';
import Pokemon from '../types/pokemon';

export const fetchPokemon = () => (dispatch: any) => {
    const cachedData = getDataFromLocalStorage('pokemon.list');

    if (cachedData) {
        dispatch({
            type: FETCH_POKEMON_LIST,
            payload: cachedData
        })

        return;
    }

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(({ results }) => {
            const allDetailsFetches = results.map(
                (pokemon: Pokemon, index: number) => fetchDetails(results, pokemon, index)
            );

            Promise.all(allDetailsFetches)
                .then(() => {
                    saveDataToLocalStorage('pokemon.list', results);
                    dispatch({
                        type: FETCH_POKEMON_LIST,
                        payload: results
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