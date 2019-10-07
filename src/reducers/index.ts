import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';
import themeReducers from './themeReducers';

export default combineReducers({
    pokemon: pokemonReducer,
    search: searchReducer,
    theme: themeReducers
});