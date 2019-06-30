import React, {Component} from 'react';
//
import './App.scss';
//
import Person from "./components/Person/Person";


/*exercise-2*/

/*import Validation from "./components/Validation/Validation";
import Char from "./components/Char/Char";*/

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'First name', age: 30},
      {id: '2', name: 'Second name', age: 10},
      {id: '3', name: 'Third name', age: 100}
    ],
    appInputStr: ''
  };

  clickHandler = (id, e) => {
    const newPersons = [...this.state.persons];
    const i = newPersons.findIndex((item) => item.id === id);
    newPersons[i].age = newPersons[i].age * 1.5;
    this.setState({persons: newPersons});
  };

  inputHandler = (id, e) => {
    const newPersons = [...this.state.persons];
    const i = newPersons.findIndex((item) => item.id === id);
    newPersons[i].name = e.target.value;
    this.setState({persons: newPersons});
  };

  handleDeletePerson = (id, e) => {
    const newPersons = this.state.persons.filter((item) => item.id !== id);
    this.setState({persons: newPersons});
  };

  /*exercise-2*/

  /*handleChangeAppInput = (e) => {
    this.setState({appInputStr: e.target.value});
  };
  handleDeleteChar = (index, e) => {
    const newStr = this.state.appInputStr.slice(0, index) + this.state.appInputStr.slice(index + 1);
    this.setState({appInputStr: newStr});
  };*/

  render() {
    return (
      <div>
        {this.state.persons.map((item, i) =>
          <Person
            {...item}
            key={i}
            btnClick={this.clickHandler}
            inputChange={this.inputHandler}
            handleDeletePerson={this.handleDeletePerson}
          />
        )}
        {/*exercise-2*/}
        {/*<div className="exercise-2">
          <input type="text"
                 onChange={this.handleChangeAppInput}
                 value={this.state.appInputStr}
          />
          <p>{this.state.appInputStr.length}</p>
          <Validation text={this.state.appInputStr} />
          <ul>
            {this.state.appInputStr.split('').map((item , i) => (
              <Char char={item}
                    index={i}
                    deleteChar={this.handleDeleteChar}
                    key={i}
              />
            ))}
          </ul>
        </div>*/}
      </div>
    );
  }
}

export default App;
