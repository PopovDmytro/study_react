import React from 'react';
//
import Joi from 'joi-browser';
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

    doSubmit = () => {
        //Call server
        console.log("submitted register");
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