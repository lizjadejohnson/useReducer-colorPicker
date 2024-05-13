import { useState, useReducer } from 'react'
import './App.css'
import Hex from './components/Hex';

// Define the initial state of our colors:
const initialState = {
  red: 128,
  green: 128,
  blue: 128
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state,
        [action.color]: action.value
      };
    case 'RESET_COLORS':
      return initialState;
    default:
      return state;
  }
}

function App() {
  //Define our initial reducer state as the colors we set in initialState:
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Color Mixer</h1>
      <div className="pickedColor" style={{ backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}>
      Hex:
      <br />
      <Hex red={state.red} green={state.green} blue={state.blue}/>
      </div>
      <div className='sliders'>
        <div>
          <label>Red: {state.red}</label>
          <input
            type="range"
            // Setting min and max ranges:
            min="0"
            max="255"
            //This part of the input element ensures that the visually displayed value in our input is in sync with the current state of the red component: 
            value={state.red}
            //This part actually pertains to adjusting the red value - [action.color]: action.value
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'red', value: +event.target.value })}
          />
        </div>
        <div>
          <label>Green: {state.green}</label>
          <input
            type="range"
            min="0"
            max="255"
            value={state.green}
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'green', value: +event.target.value })}
          />
        </div>
        <div>
          <label>Blue: {state.blue}</label>
          <input
            type="range"
            min="0"
            max="255"
            value={state.blue}
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'blue', value: +event.target.value })}
          />
        </div>
      </div>
      <button onClick={() => dispatch({ type: 'RESET_COLORS' })}>
        Reset Colors
      </button>
    </div>
  );
}

export default App;