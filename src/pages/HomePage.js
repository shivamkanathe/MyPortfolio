import React,{useLayoutEffect} from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Home.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import mainImage from "../Images/mainImage.png";
import About from "./About";
import Portfolio from "./Portfolio"; 
import ContactPage from "./ContactPage";
import ScrollAnimation from "react-animate-on-scroll";

function HomePage() {

  useLayoutEffect(() => {
    window.addEventListener('scroll',onscroll)
    return () => window.removeEventListener('scroll',onscroll)
  }, [])
  return (
    <div className="main" id="/">
      <div className="container">
        <div className="intro">
          <Row>
            <Col lg={6} md={6} sm={12} className="l-col">
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} >
              <div className="detailContainers">
                <h1>
                  Hello, I'm <span style={{ color: "orangered" }}>Shivam</span>{" "}
                  Kanathe
                </h1>
                <h3>Frontend Developer</h3>
                <div className="d-flex">
                  <a
                  rel= "noopener noreferrer" target="_blank"
                    className="linkedin"
                    href="https://www.linkedin.com/in/shivam-kanathe-b94424149/"
                  >
                    <FaLinkedinIn
                      style={{
                        color: "blue",
                        textAlign: "center",
                        fontSize: "25",
                      }}
                    />
                  </a>
                  <a className="github" rel="noopener noreferrer" target="_blank" href="https://github.com/shivamkanathe">
                    <FaGithub
                      style={{
                        color: "orangered",
                        textAlign: "center",
                        fontSize: "25",
                      }}
                    />
                  </a>
                </div>
              </div>
              </ScrollAnimation>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="userImage">
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <img src={mainImage} alt="dd" className="imageSize" />
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <About />
      <Portfolio />
      <ContactPage />
    </div>
  );
}

export default HomePage;
