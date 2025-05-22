import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function AccountMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <span style={{ cursor: 'pointer' }} onClick={() => setShowMenu(!showMenu)}>👤</span>

      {showMenu && (
        <div className="account-menu">
          <button onClick={() => { setShowLogin(true); setShowMenu(false); }}>Log in</button>
          <button onClick={() => { setShowRegister(true); setShowMenu(false); }}>Create account</button>
          <button className="close-btn" onClick={() => setShowMenu(false)}>✖</button>
        </div>
      )}

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
}

export default AccountMenu;
