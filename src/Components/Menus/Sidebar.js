import React, { useState } from "react";
import logoCollapsed from "../../assets/img/insuredmine-small.png";
import logoExpanded from "../../assets/img/insuredmine-full.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // active nav link

  const sidebarData = [
    

  { "icon": "fa-solid fa-table-columns", "label": "Dashboard", "href": "/dashboard", "tooltip": "Go to Dashboard" },
  { "icon": "fa-solid fa-building-columns", "label": "Bank", "href": "/bank", "tooltip": "Bank Management" },
  { "icon": "fa-solid fa-layer-group", "label": "Category", "href": "/categories", "tooltip": "Manage Categories" },
  { "icon": "fa-solid fa-file-lines", "label": "Reports", "href": "/reports", "tooltip": "View Reports" },
  { "icon": "fa-solid fa-paper-plane", "label": "Send", "href": "/send", "tooltip": "Send Items" },
  { "icon": "fa-solid fa-user", "label": "User", "href": "/users", "tooltip": "User Management" },
  { "icon": "fa-solid fa-chart-line", "label": "Analytics", "href": "/analytics", "tooltip": "Analytics & Insights" },
  { "icon": "fa-solid fa-cube", "label": "Products", "href": "/products", "tooltip": "Manage Products" },
  { "icon": "fa-solid fa-table-cells-large", "label": "Apps", "href": "/apps", "tooltip": "Applications" },
  { "icon": "fa-solid fa-clipboard", "label": "Tasks", "href": "/tasks", "tooltip": "Task Management" },
  { "icon": "fa-solid fa-envelope", "label": "Messages", "href": "/messages", "tooltip": "View Messages" },
  { "icon": "fa-solid fa-screwdriver-wrench", "label": "Tools", "href": "/tools", "tooltip": "Developer Tools" },
  { "icon": "fa-solid fa-circle-info", "label": "Info", "href": "/info", "tooltip": "Information" },
  { "icon": "fa-solid fa-chart-column", "label": "Reports", "href": "/statistics", "tooltip": "Statistics & Charts" },
  { "icon": "fa-solid fa-gear", "label": "Settings", "href": "/settings", "tooltip": "System Settings" }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const getLogo = () => (isOpen ? logoExpanded : logoCollapsed);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo + Toggle button */}
      <div className="logo-details">
        <div className="logo-name">
          <img src={getLogo()} className="logo" alt="InsuredMine" />
        </div>
        <button className="border-0" id="toggle-btn" onClick={toggleSidebar}>
          <i className={isOpen ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"}></i>
        </button>
      </div>

      {/* Nav list */}
      <ul className={`nav-list ${isOpen ? "scroll" : ""}`}>
        {sidebarData.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <a href={item.href}>
              <i className={item.icon}></i>
              <span className="links_name">{item.label}</span>
            </a>
            <span className="tooltip">{item.tooltip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
