import { FormInput } from '../../components';
import { Link } from 'react-router-dom';
import '../../components/forms/forms.scss';

const Register = () => {
    return (
        <div className='forms register'>
            <div className="card">
                <div className="left">
                    <h1>hello world .</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tenetur modi magni. Cum sequi ad accusamus, pariatur neque nulla facilis culpa. Dignissimos tempore inventore magnam! Atque blanditiis repudiandae pariatur consequuntur.</p>
                    <span>Already have an account ?</span>
                    <Link to='/login'>
                        <button>login</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>register</h2>
                    <form action="#">
                        <FormInput
                            placeholder='Name'
                        />
                        <FormInput
                            placeholder='Username'
                        />
                        <FormInput
                            placeholder='Email'
                        />
                        <FormInput
                            placeholder='Password'
                        />
                        <button>register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;