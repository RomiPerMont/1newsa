import { useEffect, useState } from 'react';

function ColorBar() {
    const colors = [
        '#FF7F00', 
        '#cc0000', 
        '#FF7F00', 
        '#cc0000', 
        '#FF7F00', 
        '#cc0000', 
        '#FF7F00', 
        '#cc0000', 
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
