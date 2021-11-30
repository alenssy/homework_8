import {APP_CHANGE_TEXT, APP_CHANGE_LANGUAGE, APP_CHANGE_REPOS} from "../constants/app.constants";

const initialState = {
    text: 'Hello',
    selectedLanguage: 'All',
    repos: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_CHANGE_TEXT:
            return {
                ...state,
                text: action.payload,
            }

        case APP_CHANGE_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload,
            }

        case APP_CHANGE_REPOS:
            return {
                ...state,
                repos: action.payload,
            }
            
        default:
            return state;
    }
}
