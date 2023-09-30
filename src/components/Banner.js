import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./Banner.css"

const Banner = () => {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col md={6} className="align-items-start d-none  d-lg-block ">
          <Row className="p-5">
            <img
              src="./logo.png"
              alt=""
              style={{ width: "120px", height: "60px" }}
            />
          </Row>
          <Row className="p-5">
            {" "}
            <div className="text-left p-5">
              <h1
                style={{
                  fontSize: "60px",
                  color: "#0E2368",
                  fontWeight: "700",
                }}
              >
                Discover the <br />{" "}
                <span style={{ color: "#E23744" }}>Best</span> Food <br /> and
                Drinks
              </h1>
              <p>
                Naturally made Healthcare Products for the <br /> better care &
                support of your body.
              </p>
              <button className="explore">Explore Now</button>
            </div>
          </Row>
        </Col>
        <Col md={6} className="col2 px-0 position-relative">
          <button className="navbtn position-absolute top-0 end-0 mt-3 mr-8">
            Get In Touch
          </button>
          <img
            src="./banner.jpg"
            alt="Image"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Col>
        {/* -------------------- */}
        <Col md={6} className="align-items-start d-block d-sm-none">
          {/* <Row className="p-5">
            <img
              src="./logo.png"
              alt=""
              style={{ width: "120px", height: "60px" }}
            />
          </Row> */}
          <Row className="p-5">
            {" "}
            <div className="text-left p-5">
              <h1
                style={{
                  fontSize: "60px",
                  color: "#0E2368",
                  fontWeight: "700",
                }}
              >
                Discover the <br />{" "}
                <span style={{ color: "#E23744" }}>Best</span> Food <br /> and
                Drinks
              </h1>
              <p>
                Naturally made Healthcare Products for the <br /> better care &
                support of your body.
              </p>
              <button className="explore">Explore Now</button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
