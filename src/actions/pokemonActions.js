import { FETCH_POKEMONS } from './types';

export const fetchPokemon = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pokemon => dispatch({
            type: FETCH_POKEMONS,
            payload: pokemon
        }));
}