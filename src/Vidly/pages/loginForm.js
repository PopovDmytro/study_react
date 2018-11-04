import React from 'react';
//
import Joi from 'joi-browser';
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

    doSubmit = () => {
        //Call server
        console.log("submitted");
    };

    render() {

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