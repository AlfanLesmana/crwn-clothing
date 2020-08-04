import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
import {
    ButtonsBarContainer,
    SignInTitle,
    SubtitleInfo,
    SignInContainer,
} from './sign-in.styles'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : '', password : ''})
            
        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState ({ [name] : value })
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <SubtitleInfo>Sign in with your email and password</SubtitleInfo>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleSignIn> 
                            Sign in with Google
                        </CustomButton>                    
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;