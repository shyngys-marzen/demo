import React from "react";

import "./Modal.css";

const Modal = ({ children, close }) => {
  return (
    <div className="modal" onClick={() => close(false)}>
      <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal_children">{children}</div>
        <button onClick={() => close(false)} className="close">Go back</button>
      </div>
    </div>
  );
};

export default Modal;
