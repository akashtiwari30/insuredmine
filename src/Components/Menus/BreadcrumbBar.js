import React from "react";
import { FiRefreshCcw, FiMoreHorizontal } from "react-icons/fi";

function BreadcrumbBar() {
  return (
    <div className="breadcrumb-bar row align-items-center px-3 py-2">
      {/* Left side: Breadcrumbs */}
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#" className="border-0">Contact</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact 360
            </li>
          </ol>
        </nav>
      </div>

      {/* Right side: Actions */}
      <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 text-end">
        <div className="d-flex align-items-center justify-content-end gap-2">
          {/* <button className="btn btn-light border">
            <FiRefreshCcw size={16} />
          </button> */}
          <button type="button" className="btn border">
            <FiRefreshCcw size={16} />
          </button>
          <button className="btn bg-white-color border">
            <FiMoreHorizontal size={16} />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default BreadcrumbBar;
