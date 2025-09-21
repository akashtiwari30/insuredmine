import React from "react";
// import "./DashboardCards.css";

const cards = [
  {
    icon: "fa-solid fa-print",
    title: "Bookings",
    value: "281",
    infono: "+55%",
    info: "than last week",
    color: "bg-dark",
  },
  {
    icon: "fa-solid fa-chart-bar",
    title: "Today's Users",
    value: "2,300",
    infono: "+3%",
    info: "than last month",
    color: "bg-primary",
  },
  {
    icon: "fa-solid fa-store",
    title: "Revenue",
    value: "34k",
    infono: "+1%",
    info: "than yesterday",
    color: "bg-success",
  },
  {
    icon: "fa-solid fa-user-plus",
    title: "Followers",
    value: "+91",
    infono: "",
    info: "Just updated",
    color: "bg-danger",
  },
];

const DashboardCards = () => {
  return (
    <div className="row g-3 dashboard-card">
      {cards.map((card, idx) => (
        <div key={idx} className=" col-6 col-md-3">
          <div className="card p-4 ">
            <div className="d-flex justify-content-between">
              <div className={`icon-box ${card.color}`}>
                <i className={`${card.icon} text-white`}></i>
              </div>
              <div className="d-flex flex-column justify-content-end text-end">
                <p className="text-muted mb-1">{card.title}</p>
                <h4 className="mb-1">{card.value}</h4>
              </div>
            </div>

            <div>
              <p
                className={`mt-3 mb-0 ${
                  card.info.includes("+") ? "" : "text-muted"
                }`}
              >
                <span className="green-color fw-bold"> {card.infono}{" "}</span>
                {card.info}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
