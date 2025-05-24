import Weather from './Weather';
import DateDisplay from './DateDisplay';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar';
import { useState } from 'react';

function Header({ searchTerm, setSearchTerm, handleSearch, resetSearch, onAccountClick }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="left-block">
          <DateDisplay />
          <Weather />
          <div className="left-icons" onClick={() => setShowSidebar(true)}>☰</div>
        </div>

        <div className="center-block">
          <Link to="/" onClick={resetSearch}>
            <img src="/logo.svg" alt="1News logo" className="logo" />
          </Link>
        </div>

        <div className="right-icons">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span onClick={handleSearch} style={{ cursor: 'pointer' }}>🔍</span>

          <Link to="/likes">
            <span style={{ cursor: 'pointer' }}>🤍</span>
          </Link>

          <span onClick={onAccountClick} style={{ cursor: 'pointer' }}>👤</span>
        </div>
      </header>

      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
}

export default Header;
