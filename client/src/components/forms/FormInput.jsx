import { useState } from 'react';
import './formInput.scss';

const FormInput = (props) => {
    // destructure the props , to take what need for the validation
    const { onChange, errorMessage, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className='formInput'>
            <label >
                <input
                    // spread the input props
                    {...inputProps}
                    onChange={onChange}
                    // onBlur event will handle error message to display only there is an error with the current input
                    onBlur={handleFocus}

                    onFocus={() =>
                        inputProps.name === 'confirmPassword' && setFocused(true)}

                    // when input invalid , focus will be true and error message will be shown
                    focused={focused.toString()}
                />
                <span>{errorMessage}</span>
            </label>
        </div>
    );
};

export default FormInput;