import React from "react";
import {
  FaStar,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaSms,
  FaBan,
} from "react-icons/fa";
import {
  MdNote,
  MdEmail,
  MdSchedule,
  MdTask,
  MdInsertDriveFile,
  MdMeetingRoom,
  MdVoicemail,
} from "react-icons/md";
import LeftAccord from "./LeftAccord";

function ProfileCard() {
  return (
    <>
      <div className="profile-card shadow-sm">
        {/* Badge */}
        <span className="badge badge-prospect">Prospect</span>

        {/* Name + Stars + Edit */}
        <div className="header-row">
          <div>
            <div className="name mb-0">
              <h5>Modify</h5>
              <i class="fa-solid fa-star star"></i>
            </div>

            <div className="profile-star">
              <i class="fa-regular fa-star"></i>{" "}
              <i class="fa-regular fa-star"></i>{" "}
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          {/* <FaEdit className="edit-icon" /> */}
          <div className="edit-icon">
            <a>
              <i class="fa-solid fa-pen"></i>
            </a>
          </div>
        </div>

        {/* Profile Info */}
        <div className="info">
          <p>
            <strong>Full name</strong> <span>Modify</span>
          </p>
          <p>
            <strong>Accounts</strong> <a href="#">Modify &gt;</a>
          </p>
          <p>
            <strong>Agent</strong> <span>James Addom</span>
          </p>
          <p>
            <strong>Email</strong>{" "}
            <a href="mailto:modify@example.com" className="email">
              modify@example.com <span>(Personal)</span>
            </a>
          </p>
          <p>
            <strong>Do Not Contact</strong>{" "}
            <span className="icons-row">
              <div className="icon-box">
                <FaEnvelope className="icon orange" />
              </div>
              <div className="icon-box">
                <FaSms className="icon orange" />
              </div>
              <div className="icon-box">
                <FaPhone className="icon orange" />
              </div>
              <div className="icon-box">
                <FaBan className="icon orange" />
              </div>
            </span>
          </p>
          <p>
            <strong>Description</strong>
          </p>
        </div>
        <hr />
        {/* Action Buttons */}
        <div className="actions-row">
          <div className="action">
            <div className="action-icon">
              <MdNote />
            </div>{" "}
            <span>Note</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdEmail />
            </div>{" "}
            <span>Email</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdSchedule />
            </div>{" "}
            <span>Scheduler</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <FaSms />
            </div>{" "}
            <span>SMS</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdTask />
            </div>{" "}
            <span>Task</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdInsertDriveFile />
            </div>{" "}
            <span>File</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdMeetingRoom />
            </div>{" "}
            <span>Meeting</span>
          </div>
          <div className="action">
            <div className="action-icon">
              <MdVoicemail />
            </div>{" "}
            <span>Voicemail</span>
          </div>
        </div>
      </div>
      {/* Expand All */}
      <div className="expand">
        <a href="#">
          <i class="fa-solid fa-angle-down me-3"></i> Expand All
        </a>
      </div>

      <LeftAccord />
    </>
  );
}

export default ProfileCard;
