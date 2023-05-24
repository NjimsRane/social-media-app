import { Posts, Stories } from '../../components';

import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Stories />
            <Posts />
        </div>
    );
};

export default Home;