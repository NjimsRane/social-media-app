import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineDarkMode, MdOutlineEmail, MdOutlineSearch, MdOutlineNotifications, MdOutlineApps, MdOutlineWbSunny } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';


import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { UserContext } from '../../context/UserContext';

import './navbar.scss';

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(UserContext);

    return (
        <div className='navbar'>
            <div className="left">
                <Link to='/' className='logo'><span>NjimsRane</span></Link>
                <Link to='/'>
                    <MdOutlineHome className='icons' />
                </Link>
                {darkMode
                    ? <MdOutlineWbSunny className='icons' onClick={toggle} />
                    : <MdOutlineDarkMode className='icons' onClick={toggle} />
                }
                <MdOutlineApps className='icons' />
                <div className="search">
                    <MdOutlineSearch className='icons' />
                    <input type="text" name='search_bar' placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <AiOutlineUser className='icons' />
                <MdOutlineEmail className='icons' />
                <MdOutlineNotifications className='icons' />
                <div className="user">
                    <img src={currentUser.profilPic} alt=" current user profile" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;