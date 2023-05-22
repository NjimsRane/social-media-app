import './rightBar.scss';
import RightBarProfile from './RightBarProfile';
import { lady1, lady2, man } from '../../assets';
import RightBarActivities from './RightBarActivities';


const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>suggestion for you</span>
                    <div className='user'>
                        <RightBarProfile
                            img={lady1}
                            desc='njims rane'
                        />
                        <div className='btns'>
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className='user'>
                        <RightBarProfile
                            img={man}
                            desc='njims'
                        />
                        <div className='btns'>
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>latest activities</span>
                    <div className='userInfo'>
                        <div>
                            <RightBarActivities
                                img={lady2}
                                desc='jane smith'
                            />
                            <span className='comment'>changed their cover picture</span>
                        </div>
                        <span className='time'>14 min ago</span>
                    </div>
                    <div className='userInfo'>
                        <div>
                            <RightBarActivities
                                img={lady1}
                                desc='jane smith'
                            />
                            <span className='comment'>liked a post</span>
                        </div>
                        <span className='time'>10 min ago</span>
                    </div>
                    <div className='userInfo'>
                        <div>
                            <RightBarActivities
                                img={man}
                                desc='jane smith'
                            />
                            <span className='comment'>like a comment</span>
                        </div>
                        <span className='time'>5 min ago</span>
                    </div>
                    <div className='userInfo'>
                        <div>
                            <RightBarActivities
                                img={lady2}
                                desc='jane smith'
                            />
                            <span className='comment'>posted</span>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>online friends</span>
                    <div className="user">
                        <RightBarActivities
                            img={lady1}
                            desc='njims rane'
                        />
                        <div className="circle"></div>
                    </div>
                    <div className="user">
                        <RightBarActivities
                            img={lady2}
                            desc='njims'
                        />
                        <div className="circle"></div>
                    </div>
                    <div className="user">
                        <RightBarActivities
                            img={lady1}
                            desc='rane'
                        />
                        <div className="circle"></div>
                    </div>
                    <div className="user">
                        <RightBarActivities
                            img={lady2}
                            desc='john doe'
                        />
                        <div className="circle"></div>
                    </div>
                    <div className="user">
                        <RightBarActivities
                            img={lady1}
                            desc='john doe'
                        />
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;