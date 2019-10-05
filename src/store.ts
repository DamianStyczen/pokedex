import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Pokemon from './types/pokemon';

export interface PokemonState {
    list: Array<Pokemon>;
    search: any;
    nextUrl: string;
}

export interface State {
    pokemon: PokemonState;
}

const initialState: State = {
    pokemon: {
        list: [],
        search: {},
        nextUrl: ''
    }
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )));

export default store;