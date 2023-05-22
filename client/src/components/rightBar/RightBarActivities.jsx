import './rightBar.scss';

const LeftIcons = ({ img, desc }) => {
    return (
        <div className='rightBarActivities'>
            <img src={img} alt='icons' />
            <span>{desc}</span>
        </div>
    );
};

export default LeftIcons;