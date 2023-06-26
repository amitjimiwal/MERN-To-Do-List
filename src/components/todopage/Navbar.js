import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-custom d-flex align-items-center">
      <h1 className="navbar-brand">
        ToD0Web
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
