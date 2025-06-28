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
          <li>
            <Link to="/new-zealand" className="section-link" onClick={onClose}>
              New Zealand
            </Link>
          </li>

          
<li>
  <Link to="/world-news" className="section-link" onClick={onClose}>
    World News
  </Link>
</li>

          <li>
             <Link to="/world-news" className="section-link" onClick={onClose}>
              World News
           </Link>
          </li>

          <li>
            <Link to="/sports" className="section-link" onClick={onClose}>
              Sports
            </Link>
          </li>
          <li>
            <Link to="/te-ao-maori" className="section-link" onClick={onClose}>
              Te Ao Māori
            </Link>
          </li>
          <li>
            <Link to="/edit" className="section-link" onClick={onClose}>
              <em>Editorial</em>
              Editorial
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
