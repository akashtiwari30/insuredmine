import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt, FaFilePdf } from "react-icons/fa";
const ServiceReports = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchServiceReports = async () => {
      try {
        const formData = new FormData();
        formData.append(
          "access_token",
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDgyIn0.0cSY2UkZLH3OKQ3Pg6a6GG4BYZCS1UIpdd2VB-4ry_A"
        );
        formData.append("module", "ServiceReports");
        formData.append("useruniqueid", "1082");
        formData.append("page", "1");

        const response = await fetch(
          "https://crm.bemlindia.in/bemlqualitynew/modules/Mobile/v1/listModuleRecords",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (result?.statuscode === 1) {
          setRecords(result.data.records);
        } else {
          console.error("API returned error:", result.statusMessage);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchServiceReports();
  }, []);

  const getStatusBadge = (status) => {
    const baseClass = "badge rounded-pill px-3 py-1 text-white";
    switch (status) {
      case "Closed":
        return (
          <span className={`${baseClass} bg-green-color py-2`}>{status}</span>
        );
      case "In Progress":
        return (
          <span className={`${baseClass} bg-warning text-dark py-2`}>
            {status}
          </span>
        );
      case "Lost":
        return <span className={`${baseClass} bg-danger py-2`}>{status}</span>;
      case "Pending":
        return (
          <span className={`${baseClass} bg-info text-dark py-2`}>
            {status}
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-color py-2`}>{status}</span>
        );
    }
  };

  return (
    <div className="service-report">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Service Report</h3>
        <button className="btn btn-outline-success btn-sm">View Details</button>
      </div>
      <div className="table-responsi custom-table-container">
        <table className="table custom-table table-bordered align-middle rounded-4">
          <thead className="table-ligh">
            <tr>
              <th>Request ID</th>
              <th>SAP Ref No</th>
              <th>Manual Equipment SL No</th>
              <th>Request Status</th>
              <th>
                Request created Time and Date{" "}
                <FaCalendarAlt className="text-danger ms-1" />
              </th>
              <th>Request Type</th>
              <th>
                Preview Pdf <FaFilePdf className="me-1 text-primary" />
              </th>

              {/* <th>Model</th>
              <th>Assigned To</th>
              <th>Organisation Name</th>
              <th>Equipment Serial No</th>
              <th>Is Submitted</th>
              <th>Recomm. Report</th>
              <th>Recomm. Submitted</th>
              <th>Engineer Report</th>
              <th>Report Status</th>
              <th>Credit Note</th>
              <th>SAP Notification Type</th>*/}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                {/* <td>{deal.id}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={deal.logo} alt="logo" width={24} />
                    <span>{deal.client}</span>
                  </div>
                </td>
                <td>{deal.value}</td>
                <td>{getStatusBadge(deal.status)}</td>
                <td>
                  {deal.date} <FaCalendarAlt className="text-danger ms-1" />
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={deal.avatar}
                      alt="avatar"
                      className="rounded-circle"
                      width={28}
                      height={28}
                    />
                    <span>{deal.rep}</span>
                  </div>
                </td> */}

                <td>{record.ticket_id}</td>
                <td>{record.ticket_idexternal_app_num}</td>
                <td>{record.manual_equ_ser || "-"}</td>

                {/* <td>{record.ticket_idticketstatus}</td> */}

                <td>{getStatusBadge(record.ticket_idticketstatus)}</td>
                {/* <td>{record.createdtime}</td> */}
                <td>{record.createdtime}</td>
                <td>{record.sr_ticket_type || "-"}</td>

                <td>
                  <button className="btn btn-sm">Preview Pdf</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceReports;
