import './Sidebar.css';
import { useEffect, useRef } from 'react';

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
          <li>Top Stories</li>
          <li>Latest</li>
          <li>Podcast</li>
          <li>New Zealand</li>
          <li>World</li>
          <li>Sports</li>
          <li>Te Ao Māori</li>
          <li><em>Edit</em></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
