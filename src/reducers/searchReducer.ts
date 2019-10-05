import { SearchState } from './../store';
import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from '../actions/types';
import Pokemon from '../types/pokemon';

const initialState: SearchState = {
    query: '',
    data: {} as Pokemon,
    status: ''
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case SEARCH_START:
            return {
                ...state,
                status: 'PROGRESS',
                query: action
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                data: action.data
            }
        case SEARCH_ERROR:
            return {
                ...state,
                status: 'ERROR'
            }
        default:
            return state;

    }
}