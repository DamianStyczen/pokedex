import {
    FETCH_POKEMON_LIST
} from '../actions/types';

const initialState = {
    list: []
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;

    }
}