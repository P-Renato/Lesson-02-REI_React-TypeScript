import React, { useReducer } from 'react'
import './App.css'
import { countReducer, initialState } from './reducers/counterReducer';

function App() {
  const [state, dispatch] = useReducer(countReducer, initialState);


  return (
    <div className='counter-box'>
      <h1>App</h1>
      <div>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>
        <h3>{state.counter}</h3>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
      </div>
    </div>
  )
}

export default App
