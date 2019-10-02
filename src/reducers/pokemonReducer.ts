import { FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                items: action.payload.results
            }
        default:
            return state;

    }
}