import React from 'react'
import { Col,Row } from 'react-bootstrap'
import aboutImage from '../Images/about.png';
import "../styles/AboutSelf.css";

function AboutSelf() {
    return (
        <div className="aboutSelf">
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div className="imgSection">
                        <img src={aboutImage} alt="aboutimage" className="mainImage" />
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className="col">
                        <h1 className="heads">I create products not just art</h1>
                        <p className="paras">My Name is Shivam kanathe. I am a web developer and a mobile app developer as well.I use Reactjs for web development and Flutter for mobile app development. I have more than 1 year of experience working with this technologies.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutSelf
