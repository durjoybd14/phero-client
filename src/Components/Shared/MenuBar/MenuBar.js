import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const MenuBar = () => {
  const signOutUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Navbar expand="lg" className="container px-4">
      <Navbar.Brand>
        <h5>
          <HashLink
            to="/home"
            style={{
              fontSize: "25px",
              fontWeight: "700",
              textDecoration: "none",
            }}
            className="text-primary"
          >
            Air Ticket
          </HashLink>
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="mr-4">
            <HashLink className="text-decoration-none" to="/home">
              Home
            </HashLink>
          </Nav.Link>
          <Nav.Link className="mr-4">
            <HashLink className="text-decoration-none" to="/about">
              About
            </HashLink>
          </Nav.Link>
          <Nav.Link className="mr-4">
            <HashLink className="text-decoration-none" to="/blogs">
              Blogs
            </HashLink>
          </Nav.Link>
          <Nav.Link className="mr-4">
            <HashLink className="text-decoration-none" to="/bookings">
              Bookings
            </HashLink>
          </Nav.Link>
          <Nav.Link className="mr-4">
            <HashLink className="text-decoration-none" to="/dashboard">
              Dashboard
            </HashLink>
          </Nav.Link>

          <Nav.Link className="mr-4">
            <HashLink
              className="text-decoration-none"
              onClick={() => signOutUser()}
            >
              Logout
            </HashLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
