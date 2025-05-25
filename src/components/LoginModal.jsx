import { useEffect, useRef, useState } from 'react';
import './Modal.css';

function LoginModal({ onClose }) {
  const [formType, setFormType] = useState('choose');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

      document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="auth-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✖</button>

        {formType === 'choose' && (
          <>
            <h2>Welcome</h2>
            <button className="btn primary" onClick={() => setFormType('login')}>Login</button>
            <button className="btn primary" onClick={() => setFormType('register')}>Create Account</button>
            <button className="btn facebook">Continue with Facebook</button>
            <button className="btn google">Continue with Google</button>
            <button className="btn apple">Continue with Apple</button>
          </>
        )}

        {formType === 'login' && (
          <>
            <h2>Login</h2>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button className="btn primary">Login</button>
            <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
          </>
        )}

        {formType === 'register' && (
          <>
            <h2>Create Account</h2>
            <div className="register-names">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button className="btn primary">Register</button>
            <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
