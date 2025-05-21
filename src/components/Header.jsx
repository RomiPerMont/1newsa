import Weather from './Weather';
import DateDisplay from './DateDisplay';
import { Link } from 'react-router-dom';

function Header({ searchTerm, setSearchTerm, handleSearch, resetSearch }) {
  return (
    <header className="site-header">
      <div className="left-block">
        <DateDisplay />
        <Weather />
        <div className="left-icons">☰</div>
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
        <span>🤍</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;
