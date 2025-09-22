import React from "react";

function Profile() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt=""
          />
        </div>
        <div>
          <h5 className="fs-5 fw-semibold mb-1">Admin Administrator</h5>
          <p className="mb-1">admin</p>
          <p className="mb-1">CEO</p>
        </div>
      </div>
      
      <div className="d-flex justify-content-between mt-3">
        <div>
              <a href="#" className="gray-color text-decoration-none"><i class="fa-solid fa-gears me-1"></i> My Preferences</a>
        </div>
        <div>
          <button className="border-0 rounded"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sin out</button>
        </div>
      </div>

    </>
  );
}

export default Profile;
