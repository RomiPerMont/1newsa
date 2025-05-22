import './Modal.css';

function LoginForm({ onClose }) {
  return (
    <div className="auth-modal">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h2>Login</h2>
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button className="btn primary">Login</button>
    </div>
  );
}

export default LoginForm;
