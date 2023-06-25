import { MdMoreHoriz, MdOutlineShare, MdOutlineMessage } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Comments } from '../../components';
import './post.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const Post = ({ post }) => {
    // open and close the comment section
    const [commentOpen, setCommentOpen] = useState('false');
    const { currentUser } = useContext(UserContext);


    // TEMPORARY LIKE
    const liked = true;
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt='profile' />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`}>
                                <span className="userName">{currentUser.username}</span>
                            </Link>
                            <span className="postTime">{post.postTime}</span>
                        </div>
                    </div>
                    <MdMoreHoriz />

                </div>
                <div className="content">
                    <p className='desc'>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <p className='items'>
                        {liked
                            ? <AiFillHeart className='icons' style={{ color: 'crimson' }} />
                            : <AiOutlineHeart className='icons' />
                        }
                        <span>likes</span>
                    </p>
                    <p className='items' onClick={() => setCommentOpen(!commentOpen)} >
                        <MdOutlineMessage className='icons' />
                        <span>comments</span>
                    </p>
                    <p className='items'>
                        <MdOutlineShare className='icons' />
                        <span>share</span>
                    </p>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    );
};

export default Post;

