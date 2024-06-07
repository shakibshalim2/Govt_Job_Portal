import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/login">
            <img src="/images/2_logo.jpg" alt="logo" style={{ height: "40px", marginRight: "10px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mx-auto" style={{ textAlign: "center" }}>
              <h1 className="header-title" style={{ margin: 0, fontSize: "1.75rem", color: "#007bff" }}>
                Government Job Portal
              </h1>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
