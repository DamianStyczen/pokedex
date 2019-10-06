import {
    getDataFromLocalStorage,
    saveDataToLocalStorage
} from './../utils/local-storage';
import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_ERROR
} from './types';
import { Dispatch } from 'redux';

export const searchStart = (query: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: SEARCH_START,
        query
    });

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        const data = await response.json();

        dispatch({
            type: SEARCH_SUCCESS,
            data,
            query
        });

    } catch {
        dispatch({
            type: SEARCH_ERROR,
            query
        });
    }
}
