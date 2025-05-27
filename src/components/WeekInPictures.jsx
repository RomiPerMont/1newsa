import './WeekInPictures.css';
import { Link } from 'react-router-dom';

function WeekInPictures() {
  const images = [
    { src: '/blackfernsvscanada.png', name: 'Black Ferns Going for Gold vs Canada' },
    { src: '/globalsailingjourney.png', name: 'Global Sailing Journey Hero' },
    { src: '/mastertonfires.png', name: 'Masterton Fires Update' },
    { src: '/mexnavy.png', name: 'Mexican Navy Docks In NYC' },
    { src: '/omarudriver.png', name: 'Oamaru Driver Running for Mayor' },
    { src: '/rugby.png', name: 'Super Rugby Player of the Year' }
  ];

  return (
    <div className="week-pictures">
      <div className="top-bar">
        <Link to="/" className="back-arrow">←</Link>
        <div className="week-banner">
          <div className="text-group">
            <span className="week-bold">THE WEEK</span>
            <span className="week-italic"> in pictures</span>
          </div>
          <span className="week-credit">By 1News</span>
        </div>
      </div>

      <div className="grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img.src} alt={img.name} />
            <p className="caption">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekInPictures;
