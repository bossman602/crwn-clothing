import React from "react";

import { SignInContainer, ButtonsDiv } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );

            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
        }

    }


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const { email, password } = this.state;
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput id="email"
                        name="email"
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        id="password"
                        name="password"
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <ButtonsDiv>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsDiv>
                </form>
            </SignInContainer>
        )
    };

}

export default SignIn;