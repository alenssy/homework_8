import {
    APP_CHANGE_TEXT,
    APP_CHANGE_LANGUAGE, 
    GET_POPULAR_REPOS_REQUEST,
    GET_POPULAR_REPOS_REQUEST_SUCCESS,
    GET_POPULAR_REPOS_REQUEST_FAILURE,
} from "../constants/app.constants";

export const appChangeTextAction = (payload) => ({
    type: APP_CHANGE_TEXT,
    payload
})

export const appChangeLanguageAction = (payload) => ({
    type: APP_CHANGE_LANGUAGE,
    payload
})

export const getPopularReposRequestAction = () => ({
    type: GET_POPULAR_REPOS_REQUEST
})

export const getPopularReposRequestSusseccAction = (payload) => ({
    type: GET_POPULAR_REPOS_REQUEST_SUCCESS,
    payload
})

export const getPopularReposRequestFailureAction = (payload) => ({
    type: GET_POPULAR_REPOS_REQUEST_FAILURE,
    payload
})
