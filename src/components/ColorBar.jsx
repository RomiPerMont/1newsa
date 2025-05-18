import { useEffect, useState } from 'react';

function ColorBar() {
    const colors = [
        '#cc0000', // Red
        '#cc0000', // Red
        '#FF7F00', // Orange
        '#FF7F00', // Orange
        '#FFD700', // Yellow
        '#FFD700', // Yellow
        '#FF7F00', // Orange
        '#FF7F00', // Orange
      ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="color-bar"
      style={{ backgroundColor: colors[currentColorIndex] }}
    />
  );
}

export default ColorBar;
