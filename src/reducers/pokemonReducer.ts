import { FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS } from '../actions/types';

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
        case FETCH_POKEMON_DETAILS:
            const { index, payload } = action;
            const newList: Array<any> = [...state.list];
            newList[index] = payload;

            return {
                ...state,
                list: newList
            }
        default:
            return state;

    }
}