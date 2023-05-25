import { lady1, lady2, man } from '../../assets';
import './comments.scss';

const Comments = () => {
    // TEMPORY COMMENT BEFORE GETTING THEM FROM SERVER
    const comments = [
        {
            id: 1,
            name: 'njims rane',
            userId: 1,
            profilePic: man,
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem officia quas facere iste cum, incidunt unde delectus commodi quo eligendi.",
            postTime: '1 hour ago'
        },
        {
            id: 2,
            name: 'John Doe',
            userId: 2,
            profilePic: lady2,
            desc: "delectus consequatur aliquam, exercitationem beatae eius sint quisquam",
            postTime: '30 min ago'
        },
    ];
    return (
        <div className='comments'>
            <div className="write">
                <img src={lady1} alt="cuurent user picture" />
                <input type="text" placeholder='Write a comment...' />
                <button>send</button>
            </div>
            {comments.map(comment => (
                <div className='comment' key={comment.id}>
                    <img src={comment.profilePic} alt="profile picture" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p className="desc">{comment.desc}</p>
                    </div>
                    <span className='commentTime'>{comment.postTime}</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;

