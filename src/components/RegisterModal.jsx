import './Modal.css';

function RegisterModal({ onClose, onSwitch }) {
  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Sign up for a free account</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button className="btn primary">Register</button>
        <p>
          Already have an account? <span onClick={onSwitch} style={{ color: 'blue', cursor: 'pointer' }}>Log in</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
