import React, { useState } from "react";
import logoCollapsed from "../../assets/img/insuredmine-small.png";
import logoExpanded from "../../assets/img/insuredmine-full.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // active nav link

  const sidebarData = [
    { label: "Dashboard", icon: "bx bx-grid-alt", href: "#", tooltip: "Dashboard" },
    { label: "User", icon: "bx bx-user", href: "#", tooltip: "User" },
    { label: "Messages", icon: "bx bx-chat", href: "#", tooltip: "Messages" },
    { label: "Analytics", icon: "bx bx-pie-chart-alt-2", href: "#", tooltip: "Analytics" },
    { label: "File Manager", icon: "bx bx-folder", href: "#", tooltip: "Files" },
    { label: "Order", icon: "bx bx-cart-alt", href: "#", tooltip: "Order" },
    { label: "Saved", icon: "bx bx-heart", href: "#", tooltip: "Saved" },
    { label: "Setting", icon: "bx bx-cog", href: "#", tooltip: "Setting" }
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
