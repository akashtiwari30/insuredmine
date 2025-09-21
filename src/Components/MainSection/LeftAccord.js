// AccordionSection.js
import React from "react";

const sections = [
  { id: "org", title: "Organization", action: "Edit" },
  { id: "payment", title: "Payment", action: "Request Payment", special: true },
  { id: "other", title: "Other", action: "Edit" },
  { id: "custom", title: "Custom Data", action: "Edit" },
  { id: "address", title: "Addresses", action: "Edit" },
];

export default function LeftAccord() {
  return (
    <div id="accordion" className="custom-accordion">
      {sections.map((sec, index) => (
        <div className="card accordion-card" key={sec.id}>
          <div
            className="card-header accordion-header"
            id={`heading-${sec.id}`}
          >
            <h5 className="mb-0 d-flex justify-content-between align-items-center">
              {/* Toggle Button with Arrow */}
              <button
                className="btn btn-link accordion-toggle d-flex align-items-center"
                data-toggle="collapse"
                data-target={`#collapse-${sec.id}`}
                aria-expanded="false"
                aria-controls={`collapse-${sec.id}`}
              >
                <span className="arrow mr-2"><i class="fa-solid fa-caret-right fs-7 me-2"></i></span> {/* ▶ arrow */}
                {sec.title}
              </button>

              {/* Right side action */}
              <div className="accordion-action">
                {sec.special ? (
                  <button className="btn request-btn">
                    {sec.action}
                  </button>
                ) : (
                  <button className="btn btn-link btn-sm edit-btn">
                    <i class="fa-solid fa-pen me-2"></i>{sec.action}
                  </button>
                )}
              </div>
            </h5>
          </div>

          <div
            id={`collapse-${sec.id}`}
            className="collapse"
            aria-labelledby={`heading-${sec.id}`}
            data-parent="#accordion"
          >
            <div className="card-body">
              <p>Content for {sec.title} goes here...</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
