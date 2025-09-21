import React from "react";
import ReactDOM from "react-dom";
import EmailForm from "./EmailForm";

function RightSidebarModal() {
  // Modal JSX
  const modal = (
    <div
      className="modal right fade"
      id="rightModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="rightModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="rightModalLabel">
              Send Email
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
            </button>
          </div>
          <div className="modal-body">
          <EmailForm/>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className="bg-transparent border-0"
        data-toggle="modal"
        data-target="#rightModal"
      >
        <i class="fa-solid fa-envelope"></i>
      </button>

      {/* Render modal via Portal */}
      {ReactDOM.createPortal(modal, document.body)}
    </>
  );
}

export default RightSidebarModal;
