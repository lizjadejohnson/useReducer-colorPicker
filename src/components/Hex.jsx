import React from 'react'

const Hex = ({red, green, blue}) => {
        const toHex = (colorValue) => {
          const hex = colorValue.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
      
        // Convert each component to hex separately for clarity:
        const redHex = toHex(red);
        const greenHex = toHex(green);
        const blueHex = toHex(blue);
        const hexConcat = `#${redHex}${greenHex}${blueHex}`
        
        const copyToClipboard = () => {
            navigator.clipboard.writeText(hexColor)
                .then(() => alert('Color copied to clipboard!'))
                .catch(err => console.error('Failed to copy text: ', err));
        };
  
        return hexConcat;

};

export default Hex;
