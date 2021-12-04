import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPopularRepos} from "../../redux/thunk/app.thunk";
import {List, Card, Spin} from "antd"

const { Meta } = Card

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
            {repos && (
                <List
                    grid={{ gutter: 16, column: 6 }}
                    style={{ paddingTop: '16px' }}
                    dataSource={repos}
                    renderItem={(repo, index) => (
                    <List.Item>
                        <Card
                            style={{ width: 186 }}
                            cover={<img alt="avatar" src={repo.owner.avatar_url} />}
                        >
                            <div className='popular-rank'>#{index + 1}</div>
                            <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                            <Meta title={`@${repo.owner.login}`} description={repo.stargazers_count} />
                        </Card>
                    </List.Item>
                    )}
                />
            )}
            {loading && <Spin size="large" style={{ padding: '20px', width: '100%'}} />}
            
        </>
)}

export default RepoGrid;
