import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    pokemon: pokemonReducer,
    search: searchReducer
});