import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import img from "../Images/start.svg";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const url =
    "https://img.freepik.com/free-vector/image-concept-illustration_114360-318.jpg?t=st=1713937731~exp=1713941331~hmac=ceed1a185f693ba3a44bad27a512b68c52ea1824c3923e6a24ef89b72ee09a14&w=740";
  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={6} xs={6} md={6} sm={6} >
              <h1>
                <span style={{ color: "#EF9B0F" }}>Preserve </span> Your Past,
                <br /> Embrace Your{" "}
                <span style={{ color: "#EF9B0F" }}>Present </span>
              </h1>
              <p className="regular">
              Immerse yourself in the magic of TimeCapsule, where every memory is a chapter in your own epic saga. From first steps to grand adventures, every moment is a brushstroke on the canvas of your life. Seamlessly navigate through your timeline, reliving the laughter, the tears, and everything in between. Join our community of memogram today and embark on a journey through time, where the past whispers, the present sings, and the future awaits your next great memory!
              </p>
              <Button   onClick={handleSignUpClick}
                style={{ backgroundColor: "#F53F9D",borderRadius:'12px' }}
                className=" mt-2 border-0"
              >
                Get Started
              </Button>
            </Col>

            <Col  lg={6} xs={6} md={6} sm={6}> 
              <Image src={img} roundedCircle width={700} height={500}/>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Start;
