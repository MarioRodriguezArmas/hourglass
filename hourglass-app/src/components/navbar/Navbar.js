import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light  m-0 p-0">
        <form className="container-fluid justify-content-start m-0 p-0">
          <Link className="btn btn-outline-dark  me-2" type="button" to="/">
            Login
          </Link>

          <Link
            className="btn btn-outline-dark font-weight-bold me-2"
            type="button"
            to="/upload"
          >
            Upload
          </Link>
          <Link
            className="btn btn-outline-dark font-weight-bold me-2"
            type="button"
            to="/monday"
          >
            Monday
          </Link>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
