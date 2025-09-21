import React from "react";

function CommonModal({ id, className, title, children, size = "modal-lg", scroll }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}-label`}
      aria-hidden="true"
    >
      <div className={`modal-dialog ${size} ${scroll}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="urbanist-semibold" id={`${id}-label`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className={`modal-body ${className}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CommonModal;
