import React, {useState} from 'react';
//
import './person.scss'


const Person = ({id, name, age, btnClick, inputChange, handleDeletePerson}) => {

  const [personState, setPersonState] = useState({
    hooksState: [
      {n: "1 H name", years: 1},
      {n: "2 H name", years: 2},
      {n: "3 H name", years: 3}
    ]
  });

  const [anotherState, setAnotherState] = useState('Some state data');

  const clickPersonHookState = (e) => {
    setPersonState({
      hooksState: [
        {n: "Ooops 1", years: '2__5'},
        {n: "Ooops 2", years: '1__1'},
        {n: "Ooops 3", years: '7887'}
      ]
    })
  };

  const clickAnotherHookState = (e) => {
    setAnotherState('Data was changed after clicked')
  };

  const btnStyle = {
    backgroundColor: '#fafafafa',
    border: '1px solid blue',
    padding: '7px',
    cursor: 'pointer'
  };

  return (
    <div className="person-card">
      <p>Name: {name}</p>
      <input onChange={inputChange.bind(this, id)} type="text" value={name}/>
      <p>Age: {age}</p>
      <button style={btnStyle} onClick={btnClick.bind(this, id)}>Change Age</button>

      <button onClick={handleDeletePerson.bind(this, id)}>Delete person</button>
      <hr/>
      <p onClick={clickAnotherHookState}>{anotherState}</p>
      <p onClick={clickPersonHookState}>{personState.hooksState[id - 1].n} {personState.hooksState[id - 1].years}</p>
    </div>
  );
};

export default Person;