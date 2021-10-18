import React, { useState } from "react";
import { connect } from "react-redux";
import { SignInContainer, ButtonsDiv } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { emailSignInStart } from "../../redux/user/user.actions";
import { googleSignInStart } from "../../redux/user/user.actions";




const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '', })
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();


        emailSignInStart(email, password);

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
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </ButtonsDiv>
            </form>
        </SignInContainer>
    )
};



const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);