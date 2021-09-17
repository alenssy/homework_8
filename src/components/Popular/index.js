import {Component} from "react";
import {fetchPopularRepos} from "../../api/fetchPopularRepos";
import SelectLanguage from "./SelectLanguage";
import RepoGrid from "./RepoGrid";

class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    componentDidMount() {
        this.fetchPopularReposHandler(this.state.selectedLanguage);
    }

    fetchPopularReposHandler = (text) => {
        fetchPopularRepos(text)
            .then(data => this.setState({ repos: data }));
    }

    selectLanguage = (event) => {
        this.setState({ repos: null });
        this.fetchPopularReposHandler(event.target.innerText);
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        const {selectedLanguage, repos} = this.state;
        return (
            <>
                <SelectLanguage
                    selectedLanguage={selectedLanguage}
                    selectedLanguageHandler={repos ? this.selectLanguage : null}
                />
                {repos ?
                    <RepoGrid repos={repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default Popular;
