import { FormInput } from '../../components';
import { Link } from 'react-router-dom';
import '../../components/forms/forms.scss';

const Login = () => {
    return (
        <div className='forms login'>
            <div className="card">
                <div className="left">
                    <h1>welcome back .</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tenetur modi magni. Cum sequi ad accusamus, pariatur neque nulla facilis culpa. Dignissimos tempore inventore magnam! Atque blanditiis repudiandae pariatur consequuntur.</p>
                    <span>Don`t you have an account ?</span>
                    <Link to='/register'>
                        <button>register</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>login</h2>
                    <form action="#">
                        <FormInput
                            placeholder='Username'
                        />
                        <FormInput
                            placeholder='Password'
                        />
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;