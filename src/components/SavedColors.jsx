import React from 'react';

//Takes the savedColors list *which contains full red/green/blue data) and the onSetColor function as props

const SavedColors = ({ colors, onSetColor }) => {
    return (
      <div className='savedColorsContainer'>
        {/* maps over each color in savedColors list and for each color */}
        {colors.map((color, index) => (
          <div 
            className="savedColor" 
            key={index} 
            // display each one and set the background colors
            style={{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }} 
            // if one of the saved colors gets clicked, use the onSetColor function and pass in the specific color's data set
            //(so e.g.:
                // {
                //   red: 128,
                //   green: 128,
                //   blue: 128
                // }
            onClick={() => onSetColor(color)}
          >
          </div>
        ))}
      </div>
    );
  }
  
  export default SavedColors;
