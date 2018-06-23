import React, {Component} from 'react';

//
import UserTemplate from './user_template';

class User extends Component {

    changeColor = () => {
        // this.setState({
        //     color:'blue'
        // })
        this.refs.myColor.style.color = 'blue';
    };

    state = {
        name: "Francis",
        lastname: "Jones",
        age: 25,
        hobbies: ['run', 'jump'],
        spanish: false,
        message(){console.log("message")},
        car: {brand: "Ford", model: "Focus"},
        mother: "Women",
        color: 'red'
    };

    render() {

        const style = {
            color: this.state.color
        };

        return (
            <div>
                <h4 style={style} ref="myColor" >{this.state.mother}</h4>
                <div onClick={()=> this.changeColor()}>Change color</div>
                <UserTemplate {...this.state} />
            </div>
        );
    }
}

export default User;
