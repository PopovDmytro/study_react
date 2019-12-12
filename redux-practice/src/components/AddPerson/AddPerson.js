import React , {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {

  state = {
    name: '',
    age: ''
  };

  nameChangeHandler = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  ageChangeHandler = (e) => {
    this.setState({
      age: e.target.value
    });
  };

  render () {

    return (
      <div className="AddPerson">
        <input
          value={this.state.name}
          onChange={this.state.nameChangeHandler}
          type="text"
          placeholder='Name'
        />
        <input
          value={this.state.age}
          onChange={this.state.ageChangeHandler}
          type="number"
          placeholder='Age'
        />
        <button onClick={() => { this.props.personAdded(this.state.name, this.state.age); }}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;