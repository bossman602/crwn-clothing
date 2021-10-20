import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignInContainer, ButtonsDiv } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { emailSignInStart } from "../../redux/user/user.actions";
import { googleSignInStart } from "../../redux/user/user.actions";




const SignIn = () => {
    const dispatch = useDispatch();
    const [userCredentials, setCredentials] = useState({ email: '', password: '', })
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();


        dispatch(emailSignInStart({ email, password }));

    };


    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }



    return (

        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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
                <ButtonsDiv>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={() => { dispatch(googleSignInStart()) }} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </ButtonsDiv>
            </form>
        </SignInContainer>
    )
};

export default SignIn;