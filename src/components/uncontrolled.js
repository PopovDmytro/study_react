import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    };

    handleSubmitClick = (event) => {
        event.preventDefault();

        const value = {
            name: this.name.value,
            lastname: this.lastname.value,
        };

        console.log(value);
    };

    render(){
        return(
            <div>
                <div className="container" >
                    <h2>uncontrolled</h2>
                    <form action="">
                        <div className="form_element">
                            <label htmlFor="" >Enter name</label>
                            <input
                                type="text"
                                ref={input => this.name = input}
                            />
                        </div>
                        <div className="form_element">
                            <label htmlFor="" >Enter lastname</label>
                            <input
                                type="text"
                                ref={input => this.lastname = input}
                            />
                        </div>
                        <button onClick={this.handleSubmitClick}>Sign in</button>
                    </form>
                    <hr />
                    Name: {this.name}<br />
                    LastName: {this.lastname}
                </div>
            </div>
        )
    }
}

export default Uncontrolled;