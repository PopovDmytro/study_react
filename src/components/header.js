import React, { Component } from 'react';

class Header extends Component {

    state = {
        keywords: ''
    };

    // inputChangeHandler(event, test) {
    inputChangeHandler = (event) => {
        this.setState({
            keywords:event.target.value
        });
    };

    render() {

        return (
            <header >
                <div className='logo'>Logo</div>
                <input
                    type="text"
                    onChange={this.inputChangeHandler}
                />

                <div className="">
                    <h3>{this.state.title}</h3>
                    <p>{this.state.keywords}</p>
                </div>
            </header>
        );
    }
}

export default Header;