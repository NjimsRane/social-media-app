import { FormInput } from '../../components';
import { Link } from 'react-router-dom';
import '../../components/forms/forms.scss';
import { useState } from 'react';

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: "Username should be 3-16 characters and shouldn`t include any special character !",
            pattern: "^[A-Za-z0-9]{3,16}$",//regex,
            required: true,

        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            required: true,
            errorMessage: "It should be a valid email addreess !",

        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: "Password should be 8-20 characters and include at least 1 letter ,1 number ,1 special character !",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{8,20}$",

        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm password',
            errorMessage: "Passwords don`t match !",
            pattern: values.password,
            required: true,
        },
    ];


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

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
                        {inputs.map(input => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={handleChange}
                            />
                        ))}
                        <button>register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;