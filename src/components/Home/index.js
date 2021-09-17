import {Link} from "react-router-dom";

const Home = () => (
        <div className='home-container'>
            <h1>Github Battle: battle your friends and ... stuff</h1>
            <Link to='/battle' className='button'>Battle</Link>
        </div>
)

export default Home;
