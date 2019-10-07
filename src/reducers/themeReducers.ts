import { CHANGE_THEME } from './../actions/types';

const initialState = {
    theme: 'grass'
}

export default function (state = initialState, action: any) {
    const { type, theme } = action;
    switch (type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme
            }
        default:
            return state;

    }
}