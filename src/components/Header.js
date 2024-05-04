import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import Image from "../Images/default-monochrome-black.svg";
import Lottie from "react-lottie";
import animationData from "../Images/animation1.json";
import "../App.css";

function Header() {
  const navigate = useNavigate();
  const handleSignUpClick = (val) => {
    navigate(val);
  };
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#FFE4E1" }}>
        <Row className="row mt-0">
          <Col lg={6} xs={6} md={6} sm={6}>
            <Navbar >
              <Nav.Link href="#link">
                <img
                  src={Image}
                  style={{ width: "60px", height: "60px" }}
                  alt="Img"
                />
              </Nav.Link>
            </Navbar>
          </Col>
          <Col className="nav" lg={6} xs={6} md={6} sm={6}>
            <Navbar className="mt-2 " style={{ paddingLeft: "50vh" }}>
              <Nav>
                <Nav.Link onClick={handleSignUpClick('/')}>Home</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link>Help</Nav.Link>
                <Nav.Link>About</Nav.Link>

                <Nav.Link>
                  <Button
                    style={{
                      border: "none",
                      borderRadius: "20px",
                      backgroundColor: "#F653A6",
                      fontSize: "x-small",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSignUpClick("/signup")}
                  >
                    Sign in
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        {/* <Row>
          <Col lg={12} xs={12} md={12} sm={12} className="shadow">
            <div style={{ transform: "scale(7)" }}>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                }}
                width={20}
              />
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Header;
