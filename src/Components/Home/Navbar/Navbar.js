import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import NavbarLogo from "../../../Resources/images/logos/logo.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light container ">
      <a className="navbar-brand" href="/">
        <img className="w-25" src={NavbarLogo} alt="" />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto font-weight-bold">
          <li className="nav-item ">
            <a className="nav-link mr-3" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3" href="#">
              Our Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link mr-3 " href="#">
              Our Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 " href="#">
              Contact Us
            </a>
          </li>
        </ul>

        {loggedInUser.email ? (
          <button
            onClick={() => setLoggedInUser({})}
            className="btn btn-dark my-2 my-sm-0 px-4"
            type="submit"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-dark my-2 my-sm-0 px-4" type="submit">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
