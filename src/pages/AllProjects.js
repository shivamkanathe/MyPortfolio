import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../styles/AllProject.css'
import noImage from "../Images/noImage.png";

const AllProjects = (props) => {
    console.log("this is all project page here",props.location.state);
    return (
        <div id="allProjects" style={{backgroundColor:"#090726"}}>
                <div className='mainComponent'>
                <div className='container'>
                <h1 className='allHead'>All Projects</h1>
                <div className="mainGrid">
                    <Row style={{textAlign:"center",alignItems:"center"}}>
                    {
                        props?.location?.state?.map((item)=>(
                            <Col lg={4} md={6} sm={12} className="portCol">
                                <div className = "portContainer">
                                <img src={item.image === null ? noImage : item.image } alt={item.name} className="portImage"/>
                                <p className="portPara"><a href={item.path} target="_blank" rel = "noopener noreferrer"   style={{textDecoration:"none",color:"white"}}>{item.name}</a></p>
                                </div>
                            </Col>
                        ))
                    }
                    </Row>
            </div>
                </div>
                  
                    
                </div>
        </div>
    )
}

export default AllProjects
