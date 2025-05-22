import './Modal.css';

function AuthModal({ onClose, onOpenLogin, onOpenRegister }) {
  return (
    <div className="auth-modal">
      <button className="close-btn" onClick={onClose}>✖</button>
      <button className="btn primary" onClick={onOpenLogin}>Login</button>
      <button className="btn primary" onClick={onOpenRegister}>Create account</button>

      <button className="btn facebook">Continue with Facebook</button>
      <button className="btn google">Continue with Google</button>
      <button className="btn apple">Continue with Apple</button>
    </div>
  );
}

export default AuthModal;
