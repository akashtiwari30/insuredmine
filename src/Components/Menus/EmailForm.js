import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDropzone } from "react-dropzone";
import FileUploader from "./FileUploader";
const EmailForm = () => {
  const [template, setTemplate] = useState("");
  const [signature, setSignature] = useState("");
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState([]);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  const onDrop = (acceptedFiles) => setFiles([...files, ...acceptedFiles]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSend = (e) => {
    e.preventDefault();
    console.log({ template, signature, to, cc, bcc, subject, body, files });
    alert("Email sent!");
  };

  const handleReset = () => {
    setTemplate("");
    setSignature("");
    setTo("");
    setCc("");
    setBcc("");
    setSubject("");
    setBody("");
    setFiles([]);
    setShowCc(false);
    setShowBcc(false);
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSend}>
        <div className="row g-3">
          {/* Template */}
          <div className="col-md-6">
            <label className="form-label">Template</label>
            <select
              className="form-select"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option value="">Select Template</option>
              <option value="welcome">Welcome</option>
              <option value="followup">Follow-up</option>
            </select>
          </div>

          {/* Signature */}
          <div className="col-md-6">
            <label className="form-label">Signature</label>
            <select
              className="form-select"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
            >
              <option value="">Select Signature</option>
              <option value="default">Default</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          {/* To + CC/BCC buttons */}
          <div className="col-md-12">
            <label className="form-label">To</label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />

              <button
                type="button"
                className="btn bcc-btn"
                onClick={() => setShowCc(!showCc)}
              >
                Cc
              </button>
              <button
                type="button"
                className="btn bcc-btn"
                onClick={() => setShowBcc(!showBcc)}
              >
                Bcc
              </button>
            </div>
          </div>

          {/* CC field (toggle) */}
          {showCc && (
            <div className="col-md-12">
              <label className="form-label">CC</label>
              <input
                type="email"
                className="form-control"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
              />
            </div>
          )}

          {/* BCC field (toggle) */}
          {showBcc && (
            <div className="col-md-12">
              <label className="form-label">BCC</label>
              <input
                type="email"
                className="form-control"
                value={bcc}
                onChange={(e) => setBcc(e.target.value)}
              />
            </div>
          )}

          {/* Subject */}
          <div className="col-12">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          {/* Body */}
          <div className="col-12">
            <label className="form-label">Body</label>
            <CKEditor
              editor={ClassicEditor}
              data={body}
              onChange={(event, editor) => setBody(editor.getData())}
              config={{
                height: 300, // default height
              }}
            />
          </div>

          {/* File Upload */}
          <div className="col-12 mt-3">
            <FileUploader />
          </div>

          {/* Buttons */}
          <div className="col-12 mt-3 d-flex align-items-center">
            <div className="btn-group">
              <button type="submit" className="btn send-btn">
                Send
              </button>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle dropdown-toggle-split save-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => alert("Scheduled Send!")}
                  >
                    Schedule Send
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => alert("Saved as Draft!")}
                  >
                    Save as Draft
                  </button>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
