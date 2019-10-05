import { FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS } from './types';

export const fetchPokemon = (isCached: boolean) => (dispatch: any) => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(({ results }) => {

            dispatch({
                type: FETCH_POKEMON_LIST,
                payload: results
            });

            results.forEach((pokemon: any, index: number) => {
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(details => dispatch({
                        type: FETCH_POKEMON_DETAILS,
                        payload: details,
                        index
                    }))
            });
        });
}

// const saveDataToLocalStorage = (data: any) => {
//     // window.localStorage.setItem('state')
//     console.log('Hello');
// }