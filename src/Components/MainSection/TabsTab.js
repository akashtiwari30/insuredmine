import tabsData from "./tabsData";
import React, { useState } from "react";
import ins from "../../assets/img/insuredmine.png";

function TabsTab() {
  const [openCardIds, setOpenCardIds] = useState([]);

  const toggleCard = (id) => {
    setOpenCardIds((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id) // close if open
        : [...prev, id] // open if closed
    );
  };

  return (
    <div className="tabs-first">
      {/* Parent Tabs */}
      <div className="tabs-btn">
        <ul className="nav nav-tabs" role="tablist">
          {tabsData.map((tab, i) => (
            <li key={tab.id} className="nav-item">
              <a
                className={`nav-link ${i === 0 ? "active" : ""}`}
                data-toggle="tab"
                href={`#${tab.id}`}
                role="tab"
              >
                {tab.label}
                <span className="numbers">{tab.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab-content tabs-first-content">
        {tabsData.map((tab, i) => (
          <div
            key={tab.id}
            className={`tab-pane py-3 ${i === 0 ? "active" : ""}`}
            id={tab.id}
            role="tabpanel"
          >
            {/* Sub Tabs */}
            {tab.subTabs && (
              <>
                <ul className="nav nav-tabs" role="tablist">
                  {tab.subTabs.map((sub, j) => (
                    <li key={sub.id} className="nav-item">
                      <a
                        className={`nav-link ${j === 0 ? "active" : ""}`}
                        data-toggle="tab"
                        href={`#${sub.id}`}
                        role="tab"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Sub Tab Content */}
                <div className="tab-content mt-1">
                  {tab.subTabs.map((sub, j) => (
                    <div
                      key={sub.id}
                      className={`tab-pane py-2 ${j === 0 ? "active" : ""}`}
                      id={sub.id}
                      role="tabpanel"
                    >
                      {/* Single card */}
                      {sub.contentType === "card" && sub.card && (
                        <CardItem
                          card={sub.card}
                          isOpen={openCardIds.includes(sub.id)}
                          onToggle={() => toggleCard(sub.id)}
                        />
                      )}

                      {/* Multiple cards */}
                      {sub.contentType === "cards" &&
                        sub.cards?.map((card, idx) => {
                          const cardId = `${sub.id}-${idx}`;
                          return (
                            <CardItem
                              key={cardId}
                              card={card}
                              isOpen={openCardIds.includes(cardId)}
                              onToggle={() => toggleCard(cardId)}
                            />
                          );
                        })}

                      {/* Plain content */}
                      {!sub.contentType && sub.content && (
                        <div className="sub-tab-contents">
                          <p>{sub.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CardItem({ card, isOpen, onToggle }) {
  return (
    <div className="accordion sub-accordion mb-3">
      <div className="card border-0">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <button
              className="btn toggle-btn btn-link px-0 btn-block text-left d-flex align-items-center"
              type="button"
              onClick={onToggle}
            >
              <i
                className={`fa-solid me-2 transition-transform ${
                  isOpen ? "fa-caret-down" : "fa-caret-right"
                }`}
              ></i>
              {card.type}
              <img src={ins} className="logo ms-2" alt="logo" />
            </button>
          </div>
          <div className="d-flex align-items-center gap-2">
            <p className="mb-0 title-timeings">{card.time}</p>
            <button type="button" className="btn border-0">
              <i className="fa-solid fa-eye"></i>
            </button>
            <button className="btn bg-white-color border">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="card-body px-0 py-2">
            <div className="subject-from-to px-3">
              <div className="subject-to mb-1">
                <p className="mb-0">
                  Subject: <strong>{card.subject}</strong>
                </p>
                <p className="mb-0">
                  To: <strong>{card.to}</strong>
                </p>
              </div>
              <div>
                <p className="mb-1">
                  From: <strong>{card.from}</strong>
                </p>
              </div>
            </div>
            <div className="line"></div>

            <div className="px-3 body-description">
              <p className="mb-0">{card.bodydescription}</p>
              <button className="more-btn">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
            <div className="line"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabsTab;
