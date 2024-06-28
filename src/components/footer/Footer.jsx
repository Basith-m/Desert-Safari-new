import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start pb-2">
      <Container className="p-4">
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <img src={logo} className="img-fluid w-75" alt="" />
            <p className="mt-4">
              Desert Safari TourHub is a leading tour operator in the UAE,
              specializing in desert safaris and city tours.
            </p>
            <p className="mt-5">+971 501151643</p>
            <p>
              <a
                className="text-decoration-none text-dark"
                href="mailto:info@highmotion.ae"
              >
                info@desertsafarime.com
              </a>
            </p>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase footerHeding">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mt-4">
              <li>
                <a href="#!" className="footer-a">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Desert Safari
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Buggy Tours
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  About us
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Booking Policy
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase footerHeding">
              Buggy Tours in Dubai
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mt-4 text-decoration-none">
              <li>
                <a href="#!" className="footer-a">
                  Can Am Maverick X3 4-seater
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Can Am Maverick X3 Turbo RR 2-seater
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Evening Quad Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Morning Quad Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Two Hours Buggy Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Morning Polaris Quad Tour
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase footerHeding">Safari in Dubai</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mt-4">
              <li>
                <a href="#!" className="footer-a">
                  Safari Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Safari Tour with Private car
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Short Safari Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Morning Safari Tour
                </a>
              </li>
              <li>
                <a href="#!" className="footer-a">
                  Combo Package: Safari + Quad
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Row className="container-fluid my-4">
        <Col lg={4} className="text-center fs-6 text-secondary mb-0">
          <div>
            <FaInstagram className="mx-2 fs-5" />
            <FaFacebookF className="mx-2 fs-5" />
            <FaXTwitter className="mx-2 fs-5" />
            <FaGoogle className="mx-2 fs-5" />
            <FaLinkedin className="mx-2 fs-5" />
          </div>
        </Col>
        <Col lg={4} className="text-center fs-6 text-secondary mb-0">
          <p>&copy; 2024 Desert Safari TourHub</p>
        </Col>
        <Col lg={4} className="text-center fs-6 text-secondary mb-0">
          <p>Designed by Barish</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;