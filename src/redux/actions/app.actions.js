import {APP_CHANGE_TEXT, APP_CHANGE_LANGUAGE, APP_CHANGE_REPOS} from "../constants/app.constants";

export const appChangeTextAction = (payload) => ({
    type: APP_CHANGE_TEXT,
    payload
})

export const appChangeLanguageAction = (payload) => ({
    type: APP_CHANGE_LANGUAGE,
    payload
})

export const appChangeReposAction = (payload) => ({
    type: APP_CHANGE_REPOS,
    payload
})
