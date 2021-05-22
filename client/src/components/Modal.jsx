import "../styles/modal.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <button onClick={props.handleClose}>No, Go Back</button>
        <button onClick={() => props.handleDelete()}>Yes, Delete Item</button>
      </section>
    </div>
  );
};

export default Modal;
