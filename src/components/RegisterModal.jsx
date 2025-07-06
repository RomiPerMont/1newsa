import { useState } from 'react';
import './Modal.css';

function RegisterModal({ onClose, onSwitch }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://1newsa-backend.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("User registered: " + data.message);
        onClose(); // Close modal on success
      } else {
        alert("⚠️ Error: " + data.message);
      }

    } catch (error) {
      alert(" Something went wrong: " + error.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Sign up for a free account</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit" className="btn primary">Register</button>
        </form>
        <p>
          Already have an account? <span onClick={onSwitch} style={{ color: 'blue', cursor: 'pointer' }}>Log in</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
