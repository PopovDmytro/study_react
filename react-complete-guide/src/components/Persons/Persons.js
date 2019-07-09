import React, {/*Component, */PureComponent, Fragment} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {

  // state = {};
  // static getDerivedStateFromProps(props, state) {
  //
  //   return state;
  // };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //
  //   return nextProps.persons !== this.props.persons;
  // };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    const {persons, clickHandler, inputHandler, handleDeletePerson} = this.props;

    return (
      <Fragment>
        {persons.map((item, i) =>
          <ErrorBoundary key={i}>
            <Person
              {...item}
              btnClick={clickHandler}
              inputChange={inputHandler}
              handleDeletePerson={handleDeletePerson}
            />
          </ErrorBoundary>
        )}
      </Fragment>
    );
  }
}

/*const Persons = ({persons, clickHandler, inputHandler, handleDeletePerson}) => {
  return (
    <div>
      {persons.map((item, i) =>
        <ErrorBoundary key={i}>
          <Person
            {...item}
            btnClick={clickHandler}
            inputChange={inputHandler}
            handleDeletePerson={handleDeletePerson}
          />
        </ErrorBoundary>
      )}
    </div>
  );
};*/

export default Persons;