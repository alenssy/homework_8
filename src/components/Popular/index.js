// import {fetchPopularRepos} from "../../api/fetchPopularRepos";
import SelectLanguage from "./SelectLanguage";
import RepoGrid from "./RepoGrid";
// import { useEffect } from "react";
// import {appChangeLanguageAction, appChangeReposAction} from "../../redux/actions/app.actions";
// import {useDispatch, useSelector} from 'react-redux';

const Popular = () => {
    // const dispatch = useDispatch();
    // const {selectedLanguage, repos} = useSelector(state => state.appReducer);

    // useEffect(() => {
    //     fetchPopularReposHandler(selectedLanguage)
    // }, [])

    // const fetchPopularReposHandler = (text) => {
    //     fetchPopularRepos(text)
    //         .then(data => dispatch(appChangeReposAction(data)));
    // }

    // const selectLanguage = (event) => {
    //     dispatch(appChangeReposAction(null))
    //     fetchPopularReposHandler(event.target.innerText);
    //     if(event.target.innerText !== selectedLanguage) {
    //         dispatch(appChangeLanguageAction(event.target.innerText))
    //     }
    // }

    return (
        <>
            <SelectLanguage />
            <RepoGrid />
        </>
    )
}

export default Popular;
