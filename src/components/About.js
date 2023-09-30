import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

const AboutUs = () => {
     const [isSmallScreen, setIsSmallScreen] = useState(
       window.innerWidth < 576
     );

     useEffect(() => {
       const handleResize = () => {
         setIsSmallScreen(window.innerWidth < 576);
       };

       window.addEventListener("resize", handleResize);
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);
  return (
    <div
      className="about-us-section my-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container>
        <Row className="justify-content-center justify-content-md-between">
          <Col md={4} className="d-none d-md-block">
            <div className="about-us-image">
              <img src="./about.jpg" alt="About Us" className="img-fluid" />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center p-5 ">
            <div
              className={`about-us-content ${
                isSmallScreen ? "text-center" : "text-lg-left"
              }`}
            >
              <h2
                style={{
                  fontSize: "50px",
                  color: "#0E2368",
                  fontWeight: "600",
                }}
              >
                About Us
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <button className="explore">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
