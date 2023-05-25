import { lady1, lady2, ubuntu } from '../../assets';
import { Post } from '../../components';
import './posts.scss';

const Posts = () => {

    // TEMPORY POSTS BEFORE GETTING THEM FROM SERVER
    const posts = [
        {
            id: 1,
            name: 'njims rane',
            userId: 1,
            profilePic: lady1,
            desc: "delectus consequatur aliquam, exercitationem beatae eius sint quisquam ad laboriosam provident veniam alias obcaecati ex nisi.",
            img: ubuntu,
            postTime: '1 hour ago'
        },
        {
            id: 2,
            name: 'njims rane',
            userId: 2,
            profilePic: lady2,
            desc: "delectus consequatur aliquam, exercitationem beatae eius sint quisquam delectus consequatur aliquam, exercitationem beatae eius sint quisquam .",
            postTime: '30 min ago'
        },
    ];

    return (
        <div className='posts'>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;