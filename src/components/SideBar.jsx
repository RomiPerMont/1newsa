import './Sidebar.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onClose }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="sidebar-overlay">
      <div className="sidebar" ref={sidebarRef}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <ul>
          <li>
            <Link to="/top-stories" className="section-link" onClick={onClose}>
              Top Stories
            </Link>
          </li>
          <li>
            <Link to="/latest" className="section-link" onClick={onClose}>
              Latest
            </Link>
          </li>
          <li>
            <Link to="/podcast" className="section-link" onClick={onClose}>
              Podcast
            </Link>
          </li>
          <li className="section-link">New Zealand</li>
          <li className="section-link">World</li>
          <li className="section-link">Sports</li>
          <li className="section-link">Te Ao Māori</li>
          <li className="section-link"><em>Edit</em></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
