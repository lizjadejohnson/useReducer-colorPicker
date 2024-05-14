import React from 'react';

const ButtonContainer = ({ dispatch }) => {
  return (
    <div className="buttonContainer">
    {/* If save button is clicked, dispatch the SAVE_COLOR case of our reducer (more notes about that in App.jsx)*/}
      <button onClick={() => dispatch({ type: 'SAVE_COLOR' })}>
        Save Color
      </button>
      <button onClick={() => dispatch({ type: 'RESET_COLORS' })}>
        Reset Colors
      </button>
    </div>
  );
};

export default ButtonContainer;
