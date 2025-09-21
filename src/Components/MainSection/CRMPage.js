import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProfileCard from "./ProfileCard";
import TabsTab from "./TabsTab";

function CRMPage() {
  return (
    <div className="container-fluid p-3 pt-0">
      <div className="row">
        {/* Left Panel */}
        <div className="col-lg-4 col-md-12 col-sm-12">
          <ProfileCard />
        </div>

        {/* Right Panel */}
        <div className="col-lg-8 col-md-12 col-sm-12">
          <TabsTab/>
        </div>
      </div>
    </div>
  );
}

export default CRMPage;
