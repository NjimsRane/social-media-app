import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineDarkMode, MdOutlineEmail, MdOutlineSearch, MdOutlineNotifications, MdOutlineApps } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { lady1 } from '../../assets';

import './navbar.scss';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' className='logo'><span>NjimsRane</span></Link>
                <MdOutlineHome className='icons' />
                <MdOutlineDarkMode className='icons' />
                <MdOutlineApps className='icons' />
                <div className="search">
                    <MdOutlineSearch className='icons' />
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <AiOutlineUser className='icons' />
                <MdOutlineEmail className='icons' />
                <MdOutlineNotifications className='icons' />
                <div className="user">
                    <img src={lady1} alt="user profile" />
                    <span>Njims Rane</span>
                </div>
            </div>
        </div >
    );
};

export default Navbar;