import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid text-center">
          <Link className="navbar-brand mx-auto" to="/">
            ShowCase Gallery
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
