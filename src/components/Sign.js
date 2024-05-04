import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import Image1 from "../Images/default-monochrome-black.svg";
import login from "../Images/login.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "./Firebase";

function Sign() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const showToastMessage = () => {
    toast.success("Login Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      showToastMessage();
      setTimeout(() => {
        navigate("/profile");
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
  const handleSignUpClick = () => {
    navigate("/signin");
  };
  const handleSignUpClick1 = () => {
    navigate("/");
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
                <h1 className="mt-4 fs-5">Login</h1>
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
                    className="fa-solid fa-lock icon"
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
                    onClick={handleSignin}
                    className="bg-dark border-0 "
                    style={{
                      width: "51vh",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    Login
                  </Button>
                  <ToastContainer />
                </div>
                <div>
                  <h1
                    style={{ color: "#BEBFC5", fontSize: "15px" }}
                    className="mt-2 "
                  >
                    Not account yet?{" "}
                    <Link to="/signup" onClick={handleSignUpClick}>
                      Sign Up
                    </Link>
                  </h1>{" "}
                </div>
                <div>
                  <h1
                    className=" mt-4"
                    style={{ color: "#BEBFC5", fontSize: "15px" }}
                  >
                    Or Login With:
                  </h1>
                </div>
                <div className="d-flex justify-content-between m-3">
                  <Image
                    thumbnail
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "2px solid #E5E4E2",
                      borderRadius: "12px",
                    }} // Adjust border width and color
                  />
                  <Image
                    thumbnail
                    src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-6.png"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "2px solid #E5E4E2",
                      borderRadius: "12px",
                    }} // Adjust border width and color
                  />
                  <Image
                    thumbnail
                    src="https://www.freepnglogos.com/uploads/twitter-logo-png/logo-dark-twitter-png-20.png"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "2px solid #E5E4E2",
                      borderRadius: "12px",
                    }} // Adjust border width and color
                  />
                  <Image
                    thumbnail
                    src="https://www.freepnglogos.com/uploads/aqua-blue-f-facebook-logo-png-22.png"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "2px solid #E5E4E2",
                      borderRadius: "12px",
                    }} // Adjust border width and color
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image src={login} rounded width={500} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sign;
