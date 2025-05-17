function Header() {
    return (
      <header className="site-header">
        <div className="left-icons">☰</div>
        <img src="/logo.svg" alt="1News logo" className="logo" />
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
  