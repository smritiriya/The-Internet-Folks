import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="p-5" style={{backgroundColor:"#f5f5f5"}}>
        <Row
          className="d-flex justify-content-center"
          style={{ color: "#0E2368" ,}}
        >
          <Col md={3} className="footer-col">
            <div className="logo text-center">
              <img
                src="logo.png"
                alt="Logo"
                style={{ width: "150px", height: "120px" }}
              />
            </div>
          </Col>
          <Col md={4} className="footer-col text-start p-2">
            <h5>Contact Us</h5>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li>
                {/* <a href="#">Link 1</a> */}
                <p>
                  orem Ipsum Pvt Ltd.5/1, Magalton <br /> Road, Phartosh Gate
                  near YTM <br />
                  Market, XYZ-343434
                </p>
              </li>
              <li>
                <p>example2020@gmail.com</p>
              </li>
              <li>
                <p>Link 3</p>
              </li>
            </ul>
          </Col>
          <Col md={3} className="footer-col text-start p-2">
            <h5>More</h5>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Products</p>
              </li>
              <li>
                <p>Career</p>
              </li>
              <li>
                <p>Conatact Us</p>
              </li>
            </ul>
          </Col>
          <Col md={2} className="footer-col text-start p-2">
            <h5>Social Links</h5>
            <ul
              className="social-icons text-start d-flex justify-content-start p-0 "
              style={{ listStyle: "none" }}
            >
              <li style={{ marginRight: "20px" }}>
                <i className="fa fa-instagram" style={{ fontSize: "25px" }}></i>
              </li>
              <li style={{ marginRight: "20px" }}>
                <i className="fa fa-twitter" style={{ fontSize: "25px" }}></i>
              </li>
              <li className="" style={{ marginRight: "20px" }}>
                <i className="fa fa-facebook" style={{ fontSize: "25px" }}></i>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
