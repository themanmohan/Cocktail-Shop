import React from "react";

import {Link} from 'react-router-dom'
export default function Navbar() {
  return(
    <nav className="navbar">
        <div className="nav-center">
            <h2 className="logo"> <span className="logo1">The </span><span className="logo2">Coctail</span><span className="logo3">World</span></h2>
            <ul className="nav-links">
              <li>
                 <Link to="/">Home</Link>
              </li>
              <li>
                 <Link to="/about">About</Link>
              </li>
            </ul>
        </div>
    </nav>
  )
}
