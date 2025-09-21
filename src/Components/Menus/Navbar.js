import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiUser,
  FiCalendar,
  FiPlus,
  FiBarChart2,
  FiCheckSquare,
} from "react-icons/fi";
import Profile from "./Profile/Profile";
import Topbar from "./Topbar";
import ai from "../../assets/img/ai.svg";
import RightSidebarModal from "./RightSidebarModal";

function Navbar() {
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
      <div className={`search-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="row align-items-center px-3 py-2">
          <div className="col-4">
            <div class="wrap">
              <div class="search">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Smart Search"
                />
                <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-8 text-end">
            <div className="navbar-icons">
              {/* Fire dropdown 2  */}

              <div className="dropdown">
                <button
                  className="border-0 bg-transparent fire"
                  type="button"
                  id="fire"
                  title="fire"
                >
                  <i class="fa-solid fa-fire me-2"></i>
                  What's New
                </button>
              </div>
              {/*Admin*/}

              <div>
                <button type="button" className="admin" title="Tasks">
                  My Agents
                  <i class="fa-solid fa-angle-down ms-2"></i>
                </button>
              </div>

              {/*My agents */}

              <div>
                <button
                  type="button"
                  className="my-agent"
                 
                  title="Tasks"
                >
                  My Agents
                  <i class="fa-solid fa-angle-down ms-2"></i>
                </button>
              </div>

              {/* rorate 1 */}
              <div>
                <div>
                  <button
                    type="button"
                    className="rorate border-0 bg-transparent"
                    title="refresh"
                  >
                    <i class="fa-solid fa-rotate"></i>
                  </button>
                </div>
              </div>
              {/* plus 1 */}
              <div>
                <div>
                  <button type="button" className="plus" title="plus">
                    <i class="fa fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              {/* Clock dropdown 3  */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  title="Notification"
                >
                  <i class="fa-solid fa-clock"></i>
                </button>
              </div>
              {/* Notification dropdown 3  */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="Notification"
                >
                  <i class="fa fa-solid fa-bell"></i>
                  <span className="dots"></span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="dropdown-item">
                    jasonSam Commented on yur post
                  </li>
                  <li className="dropdown-item">
                    Successfully purchages a product
                  </li>
                </ul>
              </div>
              {/* Mobile icon  */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  title="Notification"
                >
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <span className="dots"></span>
                </button>
              </div>
              {/* Phone icon  */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  title="Notification"
                >
                  <i class="fa-solid fa-phone"></i>
                </button>
              </div>

              {/* AI   */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color"
                  type="button"
                  id="dropdownMenuButton1"
                  title="Ai"
                >
                  <img className="ai-pic" src={ai} alt="ai" />
                </button>
                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="dropdown-item">
                    jasonSam Commented on yur post
                  </li>
                  <li className="dropdown-item">
                    Successfully purchages a product
                  </li>
                </ul> */}
              </div>

              {/* books dropdown 3  */}
              <div className="dropdown">
                <button
                  className="border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  title="books"
                >
                  <i class="fa-solid fa-book"></i>
                  <span className="dots"></span>
                </button>
              </div>
              <RightSidebarModal/>
              {/* profile icon 4  */}

              <div className="dropdown user-profile">
                <button
                  className=" border-0 bg-transparent blue-color dropdown-toggl"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="Profile"
                >
                  <img
                    className="profile-pic fa"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
                    alt=""
                  />
                  
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <Profile />
                  
                </div>
              </div>
                 
            </div>
          </div>
        </div>


     
      </div>
      <Topbar />
    </>
  );
}

export default Navbar;
