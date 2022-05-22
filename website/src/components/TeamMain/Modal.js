import './Team.css';
function Modal(props) {
    const {children, onCancel} = props;
  
    return (
      <div className="modal-wrapper">
        <div className="backdrop" onClick={onCancel}></div>
        <div className="modal">
          <button className="btn btn-close" onClick={onCancel}>X</button>
          {children}
        </div>
      </div>
    );
  }
  export default Modal;