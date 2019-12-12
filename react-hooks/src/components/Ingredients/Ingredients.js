import React, {useReducer, useEffect, useCallback, useMemo} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal'
import Search from './Search';

import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [
        ...currentIngredients,
        action.ingredient
      ];
    case 'DELETE':
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error('should not be reached !');
  }
};

// const httpReducer = (curHttpState, action) => {
//   switch(action.type) {
//     case 'SEND':
//       return {
//         loading: true,
//         error: null
//       };
//     case 'RESPONSE':
//       return {
//         ...curHttpState,
//         loading: false
//       };
//     case 'ERROR':
//       return {
//         loading: false,
//         error: action.errorMessage
//       };
//     case 'CLEAR':
//       return {
//         ...curHttpState,
//         loading: false
//       };
//     default: throw new Error('should not be reached !');
//   }
// };

const Ingredients = (props) => {

  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null});

  // const [userIngredients, setUserIngredients] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const {isLoading, data, error, sendRequest, reqExtra, reqIdentifier, clear} = useHttp();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS when only userIngredients changes', userIngredients);
  }, [userIngredients]);

  useEffect(() => {
    console.log('RENDERING INGREDIENTS at every render');
  });

  useEffect(() => {

    if(!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({type: 'DELETE', id: reqExtra});
    }

    if(!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({type: 'ADD', ingredient: {id: data.name, ...reqExtra}});
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    //setUserIngredients(prevIngredients => [...filteredIngredients]);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = useCallback(ingredient => {

    sendRequest(
      'https://react-hooks-update-67cba.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    );

    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});

    // fetch('https://react-hooks-update-67cba.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: {'Content-Type': 'application/json'}
    // }).then(res => {
    //
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //   return res.json();
    // }).then(resData => {
    //
    //   // setUserIngredients(prevIngredients => [
    //   //   ...prevIngredients,
    //   //   {id: resData.name, ...ingredient}
    //   // ]);
    //
    //   dispatch({type: 'ADD', ingredient: {id: resData.name, ...ingredient}});
    // });
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId => {

    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});

    // fetch(`https://react-hooks-update-67cba.firebaseio.com/ingredients/${ingredientId}.json`, {
    //   method: 'DELETE',
    // }).then(res => {
    //
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //
    //   // setUserIngredients(prevIngredients => {
    //   //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId);
    //   // });
    //
    //   dispatch({type: 'DELETE', id: ingredientId});
    //
    // }).catch((err) => {
    //   // setError(err.message);
    //   dispatchHttp({type: 'ERROR', errorMessage: err.message});
    // });

    sendRequest(`https://react-hooks-update-67cba.firebaseio.com/ingredients/${ingredientId}.json`,
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT'
    );
  }, [sendRequest]);

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   // setIsLoading(false);
  //   // dispatchHttp({type: 'CLEAR'});
  //   // clear();
  // }, []);

  const ingredientList = useMemo(() => {

    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>;
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">

      {/*{error && <ErrorModal onColse={clearError}>{error}</ErrorModal>}*/}
      {/*{httpState.error && <ErrorModal onColse={clearError}>{httpState.error}</ErrorModal>}*/}
      {error && <ErrorModal onColse={clear}>{error}</ErrorModal>}

      {/*<IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>*/}
      {/*<IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading}/>*/}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
