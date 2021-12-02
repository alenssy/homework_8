import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPopularRepos} from "../../redux/thunk/app.thunk";

const RepoGrid = () => {
    const dispatch = useDispatch();
    const {selectedLanguage, repos, loading} = useSelector(state => state.appReducer);

    useEffect(() => {
        fetchPopularReposHandler(selectedLanguage)
    }, [selectedLanguage])

    const fetchPopularReposHandler = (text) => {
        if (!loading) dispatch(getPopularRepos(text))
    }

    return (
        <>
            <ul className='popular-list'>
                {repos && repos.map((repo, index) => {
                    return (
                        <li key={repo.id} className='popular-item'>
                            <div className='popular-rank'>#{index + 1}</div>
                            <ul className='space-list-items'>
                                <li>
                                    <img className='avatar' src={repo.owner.avatar_url} alt="Avatar" />
                                </li>
                                <li>
                                    <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count}</li>
                            </ul>
                        </li>
                    )})}
            </ul>
            {loading && <p style={{ textAlign: 'center'}}>Loading ...</p>}
            
        </>
)}

export default RepoGrid;
