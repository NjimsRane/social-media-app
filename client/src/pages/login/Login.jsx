import { FormInput } from '../../components';
import { Link } from 'react-router-dom';
import '../../components/forms/forms.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const Login = () => {
    const { login } = useContext(UserContext);

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    // an array to set and handle  all the inputs with their attributs
    const inputs = [

        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Username is invalid',
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$"
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Wrong password',
            required: true
        },
    ];

    const handleChange = (e) => {
        // to handle value change , need to spread the previous value and add the current value typed in the input  to update it with their name
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        login();
    };


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
                    <form action="#" name='loginForm'>
                        {inputs.map(input => (
                            <FormInput
                                key={input.id}
                                {...input} //spread everything inside the input
                                value={values[input.name]}
                                onChange={handleChange}
                            />

                        ))}

                        <button onClick={handleLogin}>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;