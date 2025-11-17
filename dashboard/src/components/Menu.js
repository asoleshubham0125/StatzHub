import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const { user, setUser } = useContext(AuthContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = async () => {
    await axios.post("/api/auth/logout", {}, { withCredentials: true });
    setUser(null);
    window.location.href = "http://localhost:3000/login";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = user?.username
    ? user.username.substring(0, 2).toUpperCase()
    : "US";

  return (
    <div className="menu-container">
      <img src="logo.jpg" style={{ width: "110px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>
        </ul>

        {/* USER AVATAR + DROPDOWN */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="profile" onClick={toggleDropdown}>
            <div className="avatar">{initials}</div>
            <p className="username">{user?.username}</p>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-box">
              <p className="drop-username">{user?.username}</p>
              <p className="drop-email">{user?.email}</p>
              <hr />
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
