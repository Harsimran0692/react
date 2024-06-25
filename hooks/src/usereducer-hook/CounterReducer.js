/*
useReducer hook is like a usestate hook. It is used to manage complex state logic.
It takes reducer function and initial state as an argument.
It returns array of current state and dispath function.
--->state: It represents the current value and set to initial state value during initial render.
--->dispatch: It's a function that updates the state value and always trigger the re-render, it's like the updater func of useState.
--->reducer: It contains all the logic of state update. It takes state and action as parms and returs the next state.
--->initialValue: it contains the initial value mostly and object
*/
import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      throw new Error('Unknown Action Type')
  }
}

const initialState = {
  count: 0
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterReducer