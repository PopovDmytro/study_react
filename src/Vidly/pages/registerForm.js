import React from 'react';
//
import Joi from 'joi-browser';
//
import * as userService from '../../services/userService';
import auth from '../../services/authService';
//components
import Form from '../common/form';

class RegisterForm extends Form {

    state = {
        data: {password: '', username: '', name: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().required().email({ minDomainAtoms: 2 }).label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    };

    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            auth.loginWithJwt(response.headers['x-auth-token']);
            window.location = '/';
        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = e.response.data;
                this.setState({errors});
            }
        }
    };

    render() {

        return (
            <div className="mt-5">
                <h1>Register</h1>
                <form action="" onSubmit={(e) => { this.handleSubmit(e); }} >
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('register')}
                </form>
            </div>
        );
    }
}

export default RegisterForm;