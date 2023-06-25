
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter, BsPinterest } from 'react-icons/bs';
import { MdOutlinePlace, MdOutlineEmail, MdOutlineMoreVert, MdOutlineLanguage } from 'react-icons/md';
import { Posts } from '../../components';
import { lady1, ubuntu } from '../../assets';

import './profile.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div className='profile'>
            <div className="images">
                <img src={ubuntu} alt="cover picture" className='cover' />
                <img src={currentUser.profilPic} alt="user profile picture" className='profilePic' />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com" aria-label='link to facebook page' rel='noopener noreferrer' target='_blank'>
                            <BsFacebook />
                        </a>
                        <a href="https://www.instagram.com" aria-label='link to instagram page' rel='noopener noreferrer' target='_blank'>
                            <BsInstagram />
                        </a>
                        <a href="https://www.twitter.com" aria-label='link to twitter page' rel='noopener noreferrer' target='_blank'>
                            <BsTwitter />
                        </a>
                        <a href="https://www.linkedin.com" aria-label='link to linkedin page' rel='noopener noreferrer' target='_blank'>
                            <BsLinkedin />
                        </a>
                        <a href="https://www.pinterest.com" aria-label='link to pinterest page' rel='noopener noreferrer' target='_blank'>
                            <BsPinterest />
                        </a>
                    </div>
                    <div className="center">
                        <span className='userName'>{currentUser.username}</span>
                        <div className="items">
                            <div className="item">
                                <MdOutlinePlace className='icons' />
                                <span className='place'>{currentUser.city}</span>
                            </div>
                            <div className="item">
                                <MdOutlineLanguage className='icons' />
                                <span className='place'>{currentUser.website}</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <MdOutlineEmail className='icons' />
                        <MdOutlineMoreVert className='icons' />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;