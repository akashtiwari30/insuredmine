import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiUser,
  FiCalendar,
  FiPlus,
  FiBarChart2,
  FiCheckSquare,
} from "react-icons/fi";
import BreadcrumbBar from "./BreadcrumbBar";
// import Profile from "./Profile/Profile";

function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar ${scrolled ? "scrolled" : ""}`}>
       <BreadcrumbBar/>
      </div>
     
    </>
  );
}

export default Topbar;
