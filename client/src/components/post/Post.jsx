import { MdMoreHoriz, MdOutlineShare, MdOutlineMessage } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './post.scss';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
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
                                <span className="userName">{post.name}</span>
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
                    <p className='items'>
                        <MdOutlineMessage className='icons' />
                        <span>comments</span>
                    </p>
                    <p className='items'>
                        <MdOutlineShare className='icons' />
                        <span>share</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;

