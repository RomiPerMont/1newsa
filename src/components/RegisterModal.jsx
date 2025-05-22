import './Modal.css';

function RegisterForm({ onClose }) {
  return (
    <div className="auth-modal">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h2>Sign up for a free account</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button className="btn primary">Register</button>
    </div>
  );
}

export default RegisterForm;
