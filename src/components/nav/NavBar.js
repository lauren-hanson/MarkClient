import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {

  const navigate = useNavigate();

  // const navbar = useRef();
  // const hamburger = useRef();

  // const showMobileNavbar = () => {
  //   hamburger.current.classList.toggle("is-active");
    // navbar.current.classList.toggle("is-active");
  // }

  return (
    <nav
      className="navbar is-success mb-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title is-4">Mark Thomas</h1>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          // aria-expanded="false"
          data-target="navbarBasicExample"
          // onClick={showMobileNavbar}
          // ref={hamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" >
        <div className="navbar-start">

          <>
            <Link to="/posts" className="navbar-item">
              Posts
            </Link>
            <Link to="posts/myposts" className="navbar-item">
              My Posts
            </Link>
            <Link to="/categories" className="navbar-item">
              Category Manager
            </Link>
            <Link to="/tags" className="navbar-item">
              Tag Manager
            </Link>
            <Link to="/users" className="navbar-item">
              User Management
            </Link>
          </>

        </div>
      </div >
    </nav >
  );
};
