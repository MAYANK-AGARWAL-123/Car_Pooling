import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCarSide,
  faDriversLicense,
  // faHistory,
  // faPerson
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light">
      <Container className="justify-content-between align-items-center">
        <Navbar.Brand href="/">iRider</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto grid gap-5"
            fill
            variant="pills"
            defaultActiveKey="/"
          >
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="px-1"></FontAwesomeIcon>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ride">
              <FontAwesomeIcon
                icon={faCarSide}
                className="px-1"
              ></FontAwesomeIcon>
              Ride
            </Nav.Link>
            <Nav.Link as={Link} to="/drive">
              <FontAwesomeIcon
                icon={faDriversLicense}
                className="px-1"
              ></FontAwesomeIcon>
              Drive
            </Nav.Link>
            <Nav.Link as={Link} to="/yourrides">
              {/* <FontAwesomeIcon
                icon={faHistory}
                className="px-1"
              ></FontAwesomeIcon> */}
              Your Rides
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              {/* <FontAwesomeIcon icon={faPerson} className="px-1"></FontAwesomeIcon> */}
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto grid gap-2 ">
            <Nav.Link
              as={Link}
              to="/login"
              className="mr-3 btn btn-outline d-flex align-items-center border border-dark"
            >
              <span className="mx-auto fw-bolder px-2 ">LogIn</span>
            </Nav.Link>
            <Button variant="dark" onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
