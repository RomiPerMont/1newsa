import { useState } from 'react';
import './Modal.css';

function LoginModal({ closeModal }) {
  const [formType, setFormType] = useState('choose'); // 'choose' | 'login' | 'register'

  const renderContent = () => {
    if (formType === 'login') {
      return (
        <>
          <h2>Login</h2>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button className="btn primary">Login</button>
          <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
        </>
      );
    }

    if (formType === 'register') {
      return (
        <>
          <h2>Create your account</h2>
          <div className="register-names">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button className="btn primary">Register</button>
          <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
        </>
      );
    }

    return (
      <>
        <h2>Welcome</h2>
        <button className="btn primary" onClick={() => setFormType('login')}>Login</button>
        <button className="btn primary" onClick={() => setFormType('register')}>Create Account</button>
        <button className="btn facebook">Continue with Facebook</button>
        <button className="btn google">Continue with Google</button>
        <button className="btn apple">Continue with Apple</button>
      </>
    );
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>✖</button>
        {renderContent()}
      </div>
    </div>
  );
}

export default LoginModal;
