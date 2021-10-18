import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from '../../redux/user/user.actions'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer } from "./sign-up.styles";


import './sign-up.styles';

const SignUp = ({ signUpStart, }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }


        signUpStart({ displayName, email, password });

    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <SignUpContainer>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password.</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    id="displayName"
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput id="email"
                    name="email"
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    id="password"
                    name="password"
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type='password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);