import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../styles/QuizNavbar.css";

export default function QuizNavbar() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#7f9d9d",
          fontFamily: "serif",
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", fontSize: "23px" }}
          >
            QuizGK..
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ fontWeight: "bold", fontSize: "17px" }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Select Quiz Type" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="navDrop">
                  <Link
                    to="/Single"
                    state={{ langName: "HTML", quizType: "single" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {" "}
                    HTML Single Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="navDrop">
                  <Link
                    to="/Multiple"
                    state={{ langName: "HTML", quizType: "multiple" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    HTML Multiple Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="navDrop">
                  <Link
                    to="/Single"
                    state={{ langName: "JAVASCRIPT", quizType: "single" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    JS Single Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="navDrop">
                  <Link
                    to="/Multiple"
                    state={{ langName: "JAVASCRIPT", quizType: "multiple" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    JS Multiple Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="navDrop">
                  <Link
                    to="/Single"
                    state={{ langName: "REACT", quizType: "single" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    React Single Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="navDrop">
                  <Link
                    to="/Multiple"
                    state={{ langName: "REACT", quizType: "multiple" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    React Multiple Quiz
                  </Link>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action/3.4" className="navDrop">
                  <Link
                    to="/Single"
                    state={{ langName: "CSS", quizType: "single" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    CSS Single Quiz
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="navDrop">
                  <Link
                    to="/Multiple"
                    state={{ langName: "CSS", quizType: "multiple" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    CSS Multiple Quiz
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
