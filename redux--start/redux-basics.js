const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
  switch(aciton.type) {
    case ('INC_COUNTER'):
      return {
        ...state,
        counter: state.counter + 1
      };
    case ('ADD_COUNTER'):
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return {...state};
  }
};

//Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
  console.log(store.getState());
});

//Dispatching Action
store.disabled({ type: 'INC_COUNTER' });
store.disabled({ type: 'ADD_COUNTER', value: 10 });





