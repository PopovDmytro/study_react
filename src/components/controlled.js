import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        });
    };
    onSHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render(){
        return(
            <div className="container" >
                <h2>controlled</h2>
                <form action="" onSubmit={this.onSHandler}>
                    <div className="form_element">
                        <label htmlFor="" >Enter name</label>
                        <input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label htmlFor="" >Enter lastname</label>
                        <input
                            type="text"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <hr />
                Name: {this.state.name}<br />
                LastName: {this.state.lastname}
            </div>
        )
    }
}

export default Controlled;