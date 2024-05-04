import React from "react";
import {
  Image,
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import laptop from "../Images/laptop.png";
import Lottie from "react-lottie";
import side1 from "../Images/side1.svg";
import side2 from "../Images/side2.svg";
import side3 from "../Images/side3.svg";
import animationData from "../Images/animation3.json";
import animationData1 from "../Images/aimation4.json";
import Image1 from "../Images/default-monochrome-black.svg";

function Main() {
  return (
    <div>
      <Container
        fluid
        className="m-5"
        // style={{ backgroundImage: `url(${side3})` }}
      >
        <Row>
          <Col>
            <Image src={side1} alt="" width={300} roundCircle />
          </Col>
          <Col className="text-center">
            <div >
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData1,
                }}
                width={60}
                style={{transform: 'rotate(9deg)'}}
              />
              <br></br>
              <h1
                style={{ fontSize: "27px", marginLeft: "10px" }}
                className="regular"
              >
                Unlock the power of your{" "}
                <span style={{ color: "#EF9B0F" }}>memories </span>with
                TimeCapsule—where every moment becomes a timeless treasure
              </h1>
            </div>

            <div style={{ position: "relative" }}>
              <img
                src={laptop}
                alt="Transparent Image"
                style={{ width: "550px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "48%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <img
                  src={Image1}
                  style={{ width: "60px", height: "60px" }}
                  alt="Img"
                />
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                  }}
                  width={200}
                />
              </div>
            </div>
          </Col>
          <Col>
            <Image src={side2} alt="" width={300} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
