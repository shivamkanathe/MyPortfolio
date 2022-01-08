import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../styles/About.css";
import AboutSelf from '../component/AboutSelf';
import Skills from '../component/Skills';
import Services from '../component/Services';
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    const [value, setValue] = React.useState("1");

    const handleChange = (e,newValue)=>{
        setValue(newValue);
    }

        const switchScreen = ()=>{
            switch(value){
                case "1":
                    return <AboutSelf/>;
                case "2":
                    return <Skills/>;
                case "3":
                    return <Services/>; 
                default :
                return <p>Something gone wrong</p>
            }
        }

    return (
        <div className="mainAbout" id="about">
            <div className="container">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
            <h1 className="headings">About Me</h1>
            <Box sx={{ width: '100%', bgcolor: 'transparent'}}>
      <Tabs value={value} onChange={handleChange} centered  TabIndicatorProps={{style:{background:"white",}}} >
        <Tab label="About" style={{color:"white",fontWeight:"bold",fontSize:"15px"}} value="1" />
        <Tab label="Skills" style={{color:"white",fontWeight:"bold",fontSize:"15px"}} value="2"/>
        <Tab label="Services" style={{color:"white",fontWeight:"bold",fontSize:"15px"}} value="3"/>
      </Tabs>
    </Box>
        <div className="renderView" style={{color:"white"}}>{switchScreen()}</div>
        </ScrollAnimation>
            </div>
        </div>
    )
}

export default About
