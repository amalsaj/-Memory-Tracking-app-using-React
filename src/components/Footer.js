import React from "react";
import cola from "../Images/coca.png";
import Image from "../Images/default-monochrome-white.svg";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
function Footer() {
  return (
    <div style={{ backgroundColor: "#100C08", fontFamily: "sans-serif" }}>
      <Container>
        <Row>
          <Col
            className="text-center text-white"
            lg={12}
            xs={12}
            md={12}
            sm={12}
          >
            <h2 style={{ fontSize: "35px" }} className="mt-5">
              Join our Team Today
            </h2>
            <h2 className=" mt-4" style={{ fontSize: "15px" }}>
              Join our vibrant community of memory-makers and embark on a
              journey of a lifetime with TimeCapsule
            </h2>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="mt-4"
            >
              <input
                style={{
                  fontSize: "15px",
                  width: "31vh",
                  border: "none",
                  borderRadius: "5px",
                  outline: "none",
                  marginRight: "10px",
                }}
                className="text-secondary bg-body-secondary input-placeholder"
                type="text"
                placeholder="Enter your email"
              />
              <Button className="border-0">Sign up for free</Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-between mt-5" lg={12}>
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-deloitte.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-EY.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-Schlumberger.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-EY.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-tellurian.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-WGL.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-tellurian.png"
              alt=""
              width={100}
            />
            <img
              src="https://energy-dialogues.com/wp-content/uploads/2019/03/gray-logo-WGL.png"
              alt=""
              width={100}
            />
          </Col>
          <Col className="text-white mt-5" lg={12}>
            <div className="footer-content justify-content-between d-flex">
              <div className="footer-section">
                <h3 className="text-white fs-6">Resources</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3 className="text-white fs-6">Social Media</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3 className="text-white fs-6">Contact</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>Phone: +123-456-7890</li>
                  <li>Email: info@example.com</li>
                  <li>Address: 123 Main Street, City, Country</li>
                </ul>
              </div>
              <div className="footer-section">
                <h3 className="text-white fs-6">FAQ</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>FAQs</li>
                  <li>Terms of Service</li>
                  <li>Blog</li>
                  <li>Site Map</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="text-white mt-4" style={{ fontSize: "20px" }} lg={6}>
            <i
              className="fa-brands fa-instagram icon_hover"
              style={{ marginRight: "12px" }}
            ></i>
            <i
              className="fa-brands fa-facebook icon_hover"
              style={{ marginRight: "12px" }}
            ></i>
            <i
              className="fa-brands fa-twitter icon_hover"
              style={{ marginRight: "12px" }}
            ></i>
            <i
              className="fa-brands fa-youtube icon_hover"
              style={{ marginRight: "12px" }}
            ></i>
          </Col>
          <Col lg={6} className="d-flex justify-content-end  mt-4">
            <div>
              <img
                src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png"
                alt=""
                width={70}
                style={{ marginLeft: "10px" }}
              />
              <img
                src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"
                alt=""
                width={110}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </Col>
          <Col className="text-white d-flex" >
            <h1
              className="section"
              style={{
                marginRight: "12px",
              }}
            >
              memgram©2024
            </h1>
            <h1 className="section" style={{ marginRight: "12px" }}>
              Terms of Service
            </h1>
            <h1 className="section" style={{ marginRight: "12px" }}>
              Privacy Policy
            </h1>
            <h1 className="section" style={{ marginRight: "12px" }}>
              Manage Cookies
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
