import {
    APP_CHANGE_TEXT,
    APP_CHANGE_LANGUAGE, 
    GET_POPULAR_REPOS_REQUEST,
    GET_POPULAR_REPOS_REQUEST_SUCCESS,
    GET_POPULAR_REPOS_REQUEST_FAILURE,
} from "../constants/app.constants";

const initialState = {
    text: 'Hello',
    selectedLanguage: 'All',
    repos: null,
    error: null,
    loading: false,
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

        case GET_POPULAR_REPOS_REQUEST:
            return {
                ...state,
                loading: true,
                repos: null,
                error: null,
            }

        case GET_POPULAR_REPOS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload,
                error: null,
            }
        
        case GET_POPULAR_REPOS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: null,
            }
            
        default:
            return state;
    }
}
