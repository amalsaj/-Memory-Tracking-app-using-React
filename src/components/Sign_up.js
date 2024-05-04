import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import signup from "../Images/signup.svg";
import { toast, ToastContainer } from "react-toastify";

import {
  Image,
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import Image1 from "../Images/default-monochrome-black.svg";
function Sign_up() {
  const handleSignUpClick = () => {
    navigate("/signin");
  };
  const handleSignUpClick1 = () => {
    navigate("/");
  };
  const showToastMessage = () => {
    toast.success(
      <>
        <i className="fa-solid fa-lock-open"></i> Successfull
      </>,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // sign up
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      showToastMessage();
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error signing up:", errorMessage);
      setError(errorMessage);
      toast.warning(errorMessage, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Container className="m-3">
        <Row>
          <Col>
            <img
              src={Image1}
              alt="Logo"
              width={50}
              onClick={handleSignUpClick1}
            />
          </Col>
        </Row>
        <Row className="text-center m-5">
          <Col>
            <Card
              style={{
                width: "400px",
                height: "500px",
                borderColor: "#F653A6",
                borderRadius: "12px",
              }}
            >
              <Card.Body>
                <h1 className="mt-4 fs-5">Sign Up</h1>
                <div className="input-container mt-4">
                  <i
                    className="fa-regular fa-user icon"
                    style={{ color: "#F53F9D" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Username"
                    style={{
                      paddingLeft: "40px",
                      borderRadius: "12px",
                      outlineColor: "#FF91AF",
                      height: "45px",
                      border: "none",

                      width: "300px",
                      backgroundColor: "#F5F5F5",
                    }}
                    height={75}
                  />
                </div>
                <div className="input-container mt-4">
                  <i
                    className="fa-regular fa-envelope icon"
                    style={{ color: "#F53F9D" }}
                  ></i>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="text"
                    placeholder="Email"
                    style={{
                      paddingLeft: "40px",
                      borderRadius: "12px",
                      outlineColor: "#FF91AF",
                      height: "45px",
                      border: "none",

                      width: "300px",
                      backgroundColor: "#F5F5F5",
                    }}
                    height={75}
                  />
                </div>
                <div className="input-container mt-3">
                  <i
                    class="fa-solid fa-lock icon"
                    style={{ color: " rgb(140, 140, 142)" }}
                  ></i>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    placeholder="Password"
                    style={{
                      paddingLeft: "40px",
                      borderRadius: "12px",
                      height: "45px",
                      backgroundColor: "#F5F5F5",
                      outlineColor: "#FF91AF",
                      border: "none",

                      width: "300px",
                    }}
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Button
                    onClick={handleSignup}
                    className="bg-dark border-0 "
                    style={{
                      width: "51vh",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    Sign Up
                  </Button>
                  <ToastContainer />
                </div>
                <div>
                  {" "}
                  <h1
                    style={{ color: "#BEBFC5", fontSize: "15px" }}
                    className="mt-2 "
                  >
                    Already have an account?{" "}
                    <Link to="/signin" onClick={handleSignUpClick}>
                      Login
                    </Link>
                  </h1>{" "}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Image src={signup} rounded width={500} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sign_up;
