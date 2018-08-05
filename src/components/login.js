import React, {Component} from 'react';
//
import {firebase, googleAuth} from '../firebase';

class Login extends Component {

    state = {
        status: false
    };

    signIn = () => {
        firebase.auth().signInWithPopup(googleAuth);
    };

    signOut = () => {
        firebase.auth().signOut();
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                status: !!user
            });
        });
    };

    render() {
        return (
            <div>
                {this.state.status ?
                    <button onClick={this.signOut}>log out</button>
                    :
                    <button onClick={this.signIn}>login</button>
                }
            </div>
        );
    }
}

export default Login;
