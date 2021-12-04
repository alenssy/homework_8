import {Link} from "react-router-dom";
import {appChangeTextAction} from "../../redux/actions/app.actions";
import {useDispatch, useSelector} from 'react-redux';
import { Layout, Button } from "antd";

const Home = () => {
    const dispatch = useDispatch();
    const {text} = useSelector(state => state.appReducer);
    
    const changeText = () => {
        dispatch(appChangeTextAction('Goodbye'));
    }
    
    return (
        <Layout className='home-container'>
            <h1>Github Battle: battle your friends and ... stuff</h1>
            <p>{text}</p>
            <Button type="primary" className="button" onClick={changeText}>Change</Button>
            <Button type="primary" className="button"><Link to='/battle'>Battle</Link></Button>
        </Layout>
    )
}

export default Home;
