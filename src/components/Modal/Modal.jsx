import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showOverlay = true,
  closeButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {showOverlay && <div className="modal-overlay" onClick={onClose} />}
      <div className="modal">
        {closeButton && (
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        )}
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
