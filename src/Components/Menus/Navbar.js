import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import Topbar from "./Topbar";
import ai from "../../assets/img/ai.svg";
import RightSidebarModal from "./RightSidebarModal";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`search-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="row align-items-center px-3 py-2">
          {/* Search Bar */}
          <div className="col-10 col-md-4 mb-2 mb-md-0">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm w-100"
                  placeholder="Smart Search"
                />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Icons & Buttons */}
          <div className="col-2 col-md-8 d-flex justify-content-end align-items-center">
            {/* Desktop Icons - only show on large screens */}
            <div className="navbar-icons d-none d-lg-flex flex-wrap">
              <button className="border-0 bg-transparent fire" title="What's New">
                <i className="fa-solid fa-fire me-2"></i>What's New
              </button>

              <button className="admin" title="Tasks">
                My Agents <i className="fa-solid fa-angle-down ms-2"></i>
              </button>

              <button className="my-agent" title="Tasks">
                My Agents <i className="fa-solid fa-angle-down ms-2"></i>
              </button>

              <button className="rorate border-0 bg-transparent" title="refresh">
                <i className="fa-solid fa-rotate"></i>
              </button>

              <button className="plus" title="plus">
                <i className="fa-solid fa-plus"></i>
              </button>

              <button className="border-0 bg-transparent blue-color" title="Clock">
                <i className="fa-solid fa-clock"></i>
              </button>

              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color"
                  data-bs-toggle="dropdown"
                  title="Notifications"
                >
                  <i className="fa-solid fa-bell"></i>
                  <span className="dots"></span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">JasonSam Commented on your post</li>
                  <li className="dropdown-item">Successfully purchased a product</li>
                </ul>
              </div>

              <button className="border-0 bg-transparent blue-color" title="Mobile">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <span className="dots"></span>
              </button>

              <button className="border-0 bg-transparent blue-color" title="Phone">
                <i className="fa-solid fa-phone"></i>
              </button>

              <button className="border-0 bg-transparent blue-color" title="AI">
                <img className="ai-pic" src={ai} alt="ai" />
              </button>

              <button className="border-0 bg-transparent blue-color" title="Books">
                <i className="fa-solid fa-book"></i>
                <span className="dots"></span>
              </button>

              <RightSidebarModal />

              {/* Profile */}
              <div className="dropdown user-profile">
                <button
                  className="border-0 bg-transparent blue-color"
                  data-bs-toggle="dropdown"
                  title="Profile"
                >
                  <img
                    className="profile-pic fa"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
                    alt="Profile"
                  />
                </button>
                <div className="dropdown-menu">
                  <Profile />
                </div>
              </div>
            </div>

            {/* Mobile Hamburger Menu - show on small & medium */}
            <div className="d-flex d-lg-none">
              <button
                className="btn btn-light"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu d-lg-none p-2 border-top">
            <button className="w-100 mb-1 text-start border-0 bg-light">What's New</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">My Agents</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Refresh</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Plus</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Clock</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Notifications</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Mobile</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Phone</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">AI</button>
            <button className="w-100 mb-1 text-start border-0 bg-light">Books</button>
            <RightSidebarModal />
            <button className="w-100 mb-1 text-start border-0 bg-light">Profile</button>
          </div>
        )}
      </div>

      <Topbar />
    </>
  );
}

export default Navbar;
