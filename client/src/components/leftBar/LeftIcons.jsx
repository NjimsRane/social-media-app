import './leftBar.scss';

const LeftIcons = (props) => {
    return (
        <div className='leftIcons'>
            <img src={props.img} alt='icons' />
            <span>{props.desc}</span>
        </div>
    );
};

export default LeftIcons;