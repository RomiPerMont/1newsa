import Weather from './Weather';

function Header() {
  return (
    <header className="site-header">
      <div className="left-block">
        <Weather /> 
        <div className="left-icons">☰</div>
      </div>

      <div className="center-block">
        <img src="/logo.svg" alt="1News logo" className="logo" />
      </div>

      <div className="right-icons">
        <input type="text" placeholder="Search..." />
        <span>🔍</span>
        <span>🤍</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;
