import './Modal.css';

function Modal({ type, closeModal }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="auth-modal">
        <button className="close-btn" onClick={closeModal}>✖</button>
        <h2>{type === 'login' ? 'Log In' : 'Register'}</h2>
        <form>
          {type === 'register' && (
            <div className="register-names">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
          )}
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn primary">
            {type === 'login' ? 'Log In' : 'Register'}
          </button>
        </form>
        <p className="modal-link" onClick={closeModal}>Back to site</p>
      </div>
    </div>
  );
}

export default Modal;
