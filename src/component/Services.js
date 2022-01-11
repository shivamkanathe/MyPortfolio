import React from 'react'
import { Col, Row } from 'react-bootstrap';
import mobileImage from "../Images/fluttter.svg";
import websiteImage from "../Images/website.svg";
import "../styles/Services.css";

function Services() {

    const serviceList = [
        {
            "image": mobileImage,
            "serviceName":"Mobile Development"
        },
        { 
            "image":websiteImage,
            "serviceName":"Web Development"
        }
    ]
    return (
        <div className="mainServices">
            <Row className="serviceRow">
                {
                    serviceList.map((item)=>(
                        <Col lg={6} md={6} sm={12} xs={12}>
                           <div className="serviceContainer">
                           <img src={item.image} alt={item.serviceName} className="serviceImage"/>
                            <p className="serviceName">{item.serviceName}</p>
                           </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Services
