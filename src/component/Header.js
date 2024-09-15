import React from 'react'
import { PiNotepadDuotone } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import '../App.css'

const Header = () => {
    const location=useLocation();
  return (
    <header>
      <PiNotepadDuotone/>

      <div className="header-buttons">
        <Link to="/login">
          <button className={location.pathname === "/login" ? "active" : ""}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className={location.pathname === "/signup" ? "active" : ""}>
            Signup
          </button>
        </Link>
      </div>

    </header>
  );
};

export default Header;
