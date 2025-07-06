import { useEffect, useRef, useState } from 'react';
import './Modal.css';

function LoginModal({ onClose }) {
  const [formType, setFormType] = useState('choose');
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const closeModal = () => {
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
    setFormType('choose');
    onClose();
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('https://1newsa-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('✅ Login successful');
        // localStorage.setItem('token', data.token); // optional
        closeModal();
      } else {
        alert('❌ ' + data.message);
      }
    } catch (err) {
      alert('❌ Login error: ' + err.message);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch('https://1newsa-backend.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('✅ Registered successfully!');
        setFormType('login');
      } else {
        alert('❌ ' + data.message);
      }
    } catch (err) {
      alert('❌ Register error: ' + err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="auth-modal" ref={modalRef}>
        <button className="close-btn" onClick={closeModal}>✖</button>

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
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn primary" onClick={handleLogin}>Login</button>
            <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
          </>
        )}

        {formType === 'register' && (
          <>
            <h2>Create Account</h2>
            <div className="register-names">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn primary" onClick={handleRegister}>Register</button>
            <p className="modal-link" onClick={() => setFormType('choose')}>← Back</p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
