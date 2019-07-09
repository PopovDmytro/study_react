import React, {Component} from 'react';
//
// import classes from './App.scss';
//
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";


/*exercise-2*/

/*import Validation from "./components/Validation/Validation";
import Char from "./components/Char/Char";*/

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      {id: '1', name: 'First name', age: 30},
      {id: '2', name: 'Second name', age: 10},
      {id: '3', name: 'Third name', age: 100}
    ],
    appInputStr: '',
    isVisibleCockpit: true
  };

  /*life cycles*/
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    /*Sync state to props*/
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    /*DO NOT update state here !*/
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    /*May cancel updating*/
    /*Decide whether continue or not*/
    return 1;
  }

  /*then goes render*/

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    /*last-minute DOM ops*/
    return 1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', snapshot);

    /*Do side effects*/

    /*DO NOT update state here !*/
  }

  /**/

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

  toggleCockpit = (e) => {
    this.setState({isVisibleCockpit: !this.state.isVisibleCockpit});
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
      <WithClass classes='App-wrapper'>
        {this.state.isVisibleCockpit && <Cockpit />}
        <button type="button" onClick={this.toggleCockpit}>Remove Cockpit</button>
        <Persons persons={this.state.persons}
                 clickHandler={this.clickHandler}
                 inputHandler={this.inputHandler}
                 handleDeletePerson={this.handleDeletePerson}
        />
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
      </WithClass>
    );
  }
}

export default App;
