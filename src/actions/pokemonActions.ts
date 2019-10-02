import { FETCH_POKEMON_LIST } from './types';

export const fetchPokemon = () => (dispatch: any) => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pokemon => dispatch({
            type: FETCH_POKEMON_LIST,
            payload: pokemon
        }));
}