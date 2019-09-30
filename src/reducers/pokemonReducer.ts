import { FETCH_POKEMONS } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                items: action.payload.results
            }
        default:
            return state;

    }
}