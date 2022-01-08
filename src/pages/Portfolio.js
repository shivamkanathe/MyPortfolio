import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import "../styles/Portfolio.css";
import fresh1 from "../Images/freshMeat.png";
import patron from "../Images/patron.svg";
import skilzi from "../Images/Skilzi.svg"; 
import namla from "../Images/namla.svg";
import canvoza from "../Images/canvoza.svg";
import demo from "../Images/Logo.png";
import { Link} from 'react-router-dom';


function Portfolio() {


    const portfolioList = [
        {   
            "id":1,
            "image":fresh1,
            "name":"Fresh Meat",
            "path":"https://play.google.com/store/apps/details?id=com.onports.freshmeatcustomer"
        },
        {
            "id":2,
            "image":patron,
            "name":"Patron",
            "path": null,
        },
        {
            "id":3,
            "image":skilzi,
            "name":"Skilzi",
            "path": null
        },
        {
            "id":4,
            "image":namla,
            "name":"Namla",
            "path":null
        },
        {
            "id":5,
            "image":canvoza,
            "name":"Canvoza",
            "path":"http://www.canvoza.com/"
        },
        {
            "id":6,
            "image":demo,
            "name":"Lista", 
            "path":null
        },
        {
            "id":7,
            "image":null,
            "name":"Safarya",
            "path":null
        },
        {
            "id":8,
            "image":null,
            "name":"Midlal",
            "path":null,
        },
        {
            "id":9,
            "image":null,
            "name":"Darling of Chelsea",
            "path":null,
        },
        {
            "id":10,
            "image":null,
            "name":"Twitter Clone with Flutter",
            "path":null,
        },
        {
            "id":11,
            "image":null,
            "name":"React Ecommerce",
            "path":null
        },
        {
            "id":12,
            "image":null,
            "name":"Jay Bhole Fabrication",
            "path":"http://jayfabric.000webhostapp.com/",
        },
        {
            "id":13,
            "image":null,
            "name":"Saloon app with Flutter",
            "path":null,
        }
    ];
    return (
        <div className="mainPortfolio" id="portfolio">
        <div className="container">
        <h1 className="portHead">Projects</h1>
            <h3 style={{color:"white",textAlign:"center",paddingTop:"30px",paddingBottom:"30px"}}>My Projects</h3>
            <div className="mainGrid">
                    <Row style={{textAlign:"center",alignItems:"center"}}>
                    {
                        portfolioList.slice(0,6).map((item)=>(
                            <Col lg={4} md={6} sm={12} className="portCol">
                                <div className = "portContainer">
                                <img src={item.image} alt={item.name} className="portImage"  />
                                <p className="portPara"><a href={item.path} target="_blank" rel = "noopener noreferrer"   style={{textDecoration:"none",color:"white"}}>{item.name}</a></p>
                                </div>
                            </Col>
                        ))
                    }
                    </Row>
            </div>
            <div style={{textAlign:"center",paddingBottom:"50px"}}>
                        <Link to={{pathname:"/allProjects", state: portfolioList }}  ><Button className='viewAllButton'>View All</Button></Link>
            </div>
        </div>
        </div>
    )
}

export default Portfolio
