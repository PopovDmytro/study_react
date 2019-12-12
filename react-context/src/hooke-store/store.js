import {useState, useEffect} from 'react'

let globalState = {};

let listeners = [];

let actions = {};

export const useStore = (shouldListen = true) => {

  const [state, setState] = useState(globalState);

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = {...globalState, ...newState};

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {

    if(shouldListen) {

      listeners.push(setState);
    }

    return () => {
      if(shouldListen) {

        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch]
};

export const initStore = (userAction, initialState) => {
  if (initialState) {
    globalState = {...globalState}
  }

  actions = {...actions, ...userAction};
};