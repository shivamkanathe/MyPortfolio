import React from 'react'
import { Col,Row } from 'react-bootstrap';
import "../styles/Skills.css";

function Skills() {

    const skillList = [
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            "skillName":"Flutter"
        },
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" ,
            "skillName":"Reactjs"
        },
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
            "skillName":"Bootstrap"
        },
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            "skillName":"Firebase"
        },
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            "skillName":"Material ui"
        },
        {
            "image":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "skillName":"JavaScript"
        }
    ];
    return (
        <div className="mainSkills">
            <Row>
                {
                    skillList.map((item)=>(
                        <Col lg={4} md={4} sm={12} xs={12}>
                           <div className="skillContainer">
                           <img src={item.image} alt={item.skillName} className="skillImage"/>
                            <p className="skillName">{item.skillName}</p>
                           </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Skills
