import { useContext } from 'react';
import { lady1, lady2, man } from '../../assets';
import { UserContext } from '../../context/UserContext';
import './stories.scss';

const Stories = () => {
    // TEMPORY STORY BEFORE GETTING THEM FROM SERVER
    const stories = [
        {
            id: 1,
            name: 'John Doe',
            img: lady2
        },
        {
            id: 2,
            name: 'Rane',
            img: lady1
        },
        {
            id: 3,
            name: 'njims',
            img: man
        },
        {
            id: 4,
            name: 'Njims Rane',
            img: lady1
        },
    ];
    const { currentUser } = useContext(UserContext);
    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser.profilPic} alt="current user picture" />
                <span>{currentUser.name}</span>
                <button className='btn'>
                    +
                </button>
            </div>

            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="story" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;