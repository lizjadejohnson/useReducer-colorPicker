import React from 'react';

const Hex = ({ red, green, blue }) => {
  const toHex = (num) => num.toString(16).padStart(2, '0');
  const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

  // Function to determine luminance:
  const luminance = (r, g, b) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  // Determine if the color is dark:
  const isDark = luminance(red, green, blue) < 0.5;

  return (
    <div style={{ color: isDark ? '#ffffff' : '#000000' }}>
        Hex:
        <br />
      {hex}
    </div>
  );
};

export default Hex;
