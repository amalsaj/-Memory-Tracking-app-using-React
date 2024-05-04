import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  CardTitle,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Image from "../Images/default-monochrome-black.svg";
import "../App.css";
import data from "../Images/data.png";
import data2 from "../Images/data2.png";
import create from "../Images/create.svg";
import card from "../Images/card.svg";
function VerticalNavbar() {
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedPhotos(files);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 Nav">
          <Navbar expand="true" className="flex-column">
            <Navbar.Brand>
              <img
                src={Image}
                style={{ width: "60px", height: "60px" }}
                alt="Img"
              />
            </Navbar.Brand>

            <Nav className="flex-column" style={{ height: "auto" }}>
              <Nav.Link className="dark mt-2">
                {" "}
                <i class="fa-solid fa-table-columns"></i> Dashboard
              </Nav.Link>
              <Nav.Link className="dark mt-2">
                <i class="fa-solid fa-images"></i> Photos
              </Nav.Link>
              <Nav.Link className="dark mt-2">
                <i class="fa-solid fa-images"></i> Map
              </Nav.Link>
              <Nav.Link className="dark mt-2">
                <i class="fa-solid fa-timeline"></i> Timeline
              </Nav.Link>
              <Nav.Link className="mt-5 text-center">
                <img
                  src={data2}
                  style={{ width: "30px", height: "30px" }}
                  alt="Img"
                />
                <h1 className="fs-6">Dominic</h1>
                <h1 className="text-secondary fs-6">dominic@gmail.com</h1>
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div
          className="col-9 content"
          // style={{
          //   backgroundImage: `url(${create})`,
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <Row className="p-3 m-1">
            <Col>
              <h1 className="fs-3">Dashboard</h1>
              <h2 className="fs-6 text-secondary">Welcome, Walter!</h2>
            </Col>
          </Row>
          <Row className="m-2 text-center ">
            <Card className="text-center">
              
              <Card.Img src={create} width={200} height={300} />
              <Card.Body>
                <Button className="m-4 bg-success work" onClick={toggleForm}>
                  Create Memories <i class="fa-solid fa-plus"></i>
                </Button>
              </Card.Body>
            </Card>
          </Row>
          {showForm && (
            <>
              <Card className="memory m-5 border-3">
              <Card.Img src={card} width={200} height={200} />
                <Card.Body>
                  <Card.Title className="fs-3 fw-bolder mt-1">
                    Create Your Memory
                  </Card.Title>
                  <div className="mt-4">
                    <Form.Group className="mb-3">
                      <Form.Label className="">
                        <i className="fas fa-heading"></i> Memory Name
                      </Form.Label>
                      <Form.Control className="pad bg-body-secondary mt-2" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="">
                        <i className="far fa-calendar-alt"></i> Choose Date
                      </Form.Label>
                      <br></br>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control bg-body-secondary text-center mt-2"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="">
                        <i className="fas fa-users"></i> Select Category
                      </Form.Label>
                      <Form.Select size="sm" className="pad bg-body-secondary mt-2">
                        <option value="1">Single</option>
                        <option value="2">With Friends</option>
                        <option value="3">With Family</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="">
                        <i className="far fa-smile"></i> Emotion
                      </Form.Label>
                      <Form.Select size="sm" className="pad bg-body-secondary mt-2">
                        <option value="1">Happy</option>
                        <option value="2">Sad</option>
                        <option value="3">Surprise</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="">
                        <i className="far fa-image"></i> Add Photos
                      </Form.Label>
                      <Form.Control
                        className="pad bg-body-secondary mt-2"
                        type="file"
                        multiple
                        onChange={handlePhotoChange}
                      />
                      <div className="image-preview mt-3">
                        {selectedPhotos.map((file, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            width={200}
                          />
                        ))}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                      <Form.Label className="">
                        <i className="far fa-sticky-note"></i> Memory Note
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} className="pad bg-body-secondary mt-2" />
                    </Form.Group>
                    <Button className=' border-0'variant="primary" type="submit" style={{backgroundColor:'#F653A6'}}>
                      Create Memory
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerticalNavbar;
