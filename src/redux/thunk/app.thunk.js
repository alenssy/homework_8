import { getPopularReposRequestAction, getPopularReposRequestSusseccAction, getPopularReposRequestFailureAction } from "../actions/app.actions";
import { getPopularReposRequest } from "../requests/app.requests";

export const getPopularRepos = (selectedLanguage) => async (dispatch) => {
    dispatch(getPopularReposRequestAction())
    return getPopularReposRequest(selectedLanguage)
        .then(payload => dispatch(getPopularReposRequestSusseccAction(payload)))
        .catch(error => dispatch(getPopularReposRequestFailureAction(error)))
}