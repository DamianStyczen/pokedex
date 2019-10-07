import { CHANGE_THEME } from './types';
import { Dispatch } from 'redux';

export const changeTheme = (type: string) => (dispatch: Dispatch) => {
    dispatch({
        type: CHANGE_THEME,
        theme: type
    })
}  