import './formInput.scss';

const FormInput = (props) => {
    return (
        <div className='formInput'>
            <label >
                <input placeholder={props.placeholder} />
            </label>
        </div>
    );
};

export default FormInput;