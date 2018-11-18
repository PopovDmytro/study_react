import React from 'react';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../../services/authService';
//components
import Form from '../common/form';

class LoginForm extends Form {

    state = {
        data: {password: '', username: ''},
        errors: {}
    };

    schema = {
      username: Joi.string().required().label('Username'),
      password: Joi.string().required().label('Password')
    };

    doSubmit = async () => {
        try {
            const {data} = this.state;
            await auth.login(data.username, data.password);

            const {state} = this.props.location;
            window.location = state ? state.from.pathname : "/";
        } catch (e) {
            if(e.response && e.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = e.response.data;
                this.setState({errors});
            }
        }
    };

    render() {
        if(auth.getCurrentUser()) return <Redirect to='/' />;

        return (
            <div className="mt-5">
                <h1>Login</h1>
                <form action=""
                      onSubmit={(e) => { this.handleSubmit(e); }}
                >
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;