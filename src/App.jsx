import { useState, useReducer } from 'react'
import './App.css'
import Hex from './components/Hex';
import ButtonContainer from './components/ButtonContainer';
import SavedColors from './components/SavedColors';

// Define the initial state of our colors:
const initialState = {
  colors: {
    red: 128,
    green: 128,
    blue: 128
  },
  savedColors: []
};


function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        //spreads out our state:
        ...state,
        //Within our state, it takes the colors section and spreads *it*:
        colors: {
          //Within colors it retains the rest of our colors so that only the color we are modifying actually gets changed:
          ...state.colors,
          // targets the values of individual colors in our state (like the amount of red etc):
          [action.color]: action.value
        }
      };
    case 'RESET_COLORS':
      return {
        //Returns us to our default color and empties the savedColors list:
        ...initialState
      };
    case 'SAVE_COLOR':
      return {
        ...state,
        //Keeps rest of state the same and then within just saved colors
        // it adds a new one to it
        //The one it adds is the current settings of our colors state
        //(so e.g.:
          // {
          //   red: 128,
          //   green: 128,
          //   blue: 128
          // }
        savedColors: [...state.savedColors, { ...state.colors }]
      };
    
    case 'LOAD_COLOR':
      return {
        ...state,
        colors: action.color
      };

    default:
      return state;
    }
}

function App() {
  //Define our initial reducer state as the colors we set in initialState:
  const [state, dispatch] = useReducer(reducer, initialState);
  
  //A function which takes a color, using that color it dispatches the LOAD_COLOR case of our reducer
  //Gets called by a user selecting an individual saved color in SavedColor.jsx
  const handleSetColor = (color) => {
    dispatch({ type: 'LOAD_COLOR', color });
  };

  return (
    <div className='App'>
      <h1>Color Mixer</h1>
      {/* Set to the current state of red/green/blue: */}
      <div className="pickedColor" style={{ backgroundColor: `rgb(${state.colors.red}, ${state.colors.green}, ${state.colors.blue})` }}>
      <Hex red={state.colors.red} green={state.colors.green} blue={state.colors.blue}/>
      </div>
      {/* Only show the div if our savedColors list isnt empty: */}
      {/* Pass our savedColors and handleSetColor function*/}
      {state.savedColors.length > 0 && <SavedColors colors={state.savedColors} onSetColor={handleSetColor} />}

      <div className='sliders'>
        <div>
          <label>Red: {state.colors.red}</label>
          <br />
          <input
            type="range"
            // Setting min and max ranges:
            min="0"
            max="255"
            //This part of the input element ensures that the visually displayed value in our input is in sync with the current state of the red component: 
            value={state.colors.red}
            //This part actually pertains to adjusting the red value - [action.color]: action.value
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'red', value: +event.target.value })}
          />
        </div>
        <div>
          <label>Green: {state.colors.green}</label>
          <br />
          <input
            type="range"
            min="0"
            max="255"
            value={state.colors.green}
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'green', value: +event.target.value })}
          />
        </div>
        <div>
          <label>Blue: {state.blue}</label>
          <br />
          <input
            type="range"
            min="0"
            max="255"
            value={state.blue}
            onChange={(event) => dispatch({ type: 'CHANGE_COLOR', color: 'blue', value: +event.target.value })}
          />
        </div>
      </div>
      <ButtonContainer dispatch={dispatch} />
    </div>
  );
}

export default App;