import { lady1, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13 } from '../../assets';

import LeftIcons from './LeftIcons';
import './leftBar.scss';


const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={lady1} alt="user profile" />
                        <span>Njims Rane</span>
                    </div>
                    <div className="items">
                        <LeftIcons img={img1} desc='friends' />
                        <LeftIcons img={img2} desc='groups' />
                        <LeftIcons img={img3} desc='marketPlace' />
                        <LeftIcons img={img4} desc='watch' />
                        <LeftIcons img={img5} desc='memories' />
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>your shortcuts</span>
                    <div className="items">
                        <LeftIcons img={img6} desc='events' />
                        <LeftIcons img={img7} desc='gaming' />
                        <LeftIcons img={img8} desc='gallery' />
                        <LeftIcons img={img9} desc='videos' />
                        <LeftIcons img={img10} desc='messages' />
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>others</span>
                    <div className="items">
                        <LeftIcons img={img11} desc='fundraiser' />
                        <LeftIcons img={img12} desc='tutorials' />
                        <LeftIcons img={img13} desc='courses' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;