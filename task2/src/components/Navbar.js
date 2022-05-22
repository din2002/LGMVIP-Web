import React from "react";

const Navbar = ({ getpersonData }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          DKC
        </a>
        <button
          className="d-flex btn btn-outline-success"
          type="submit"
          onClick={() => getpersonData(1)}
        >
          Get User
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
