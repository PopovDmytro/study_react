import React, {useState} from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';

import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const [endteredTitle, setEnteredTitle] = useState('');
  const [endteredAmount, setEnteredAmount] = useState('');

  const [inputState, setInputState] = useState({
    title: '',
    amount: ''
  });

  const submitHandler = event => {
    event.preventDefault();

    props.onAddIngredient({
      title: inputState.title,
      amount: inputState.amount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text"
                   id="title"
                   value={inputState.title}
                   onChange={e => {
                     const title = e.target.value;
                     setInputState((prevState) => {
                       return {...prevState, title};
                     })
                   }}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number"
                   id="amount"
                   value={inputState.amount}
                   onChange={e => {
                     const amount = e.target.value;
                     setInputState((prevState) => {
                       return {...prevState, amount};
                     })
                   }}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
