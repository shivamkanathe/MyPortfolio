import React,{useState,useEffect,useRef} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/CustomNavbar.css";

function CustomNavbar() {
  const [navBackground, setNavBackground] = useState(false)
   const navRef = useRef()
   navRef.current = navBackground
   useEffect(() => {
     const handleScroll= () =>{
       const show =  window.scrollY>30
       if(navRef.current !== show){
         setNavBackground(show)
       }
     }
     document.addEventListener('scroll',handleScroll)
     return () => {
       document.removeEventListener('scroll',handleScroll)
     }
   }, [])

  return (
    <div className="mainNav">
      <Navbar collapseOnSelect style={{'boxShadow': (navBackground ? '0px 2px 2px  rgba(68, 88, 144, 0.1)': ''),backgroundColor:navBackground ?"#090726":"transparent" }}  expand="lg" variant="dark"  className="justify-content-center" fixed="top">
        <Container className="navContainer">
          <Navbar.Brand href="/" ><span className="brandColor">SHI</span>VAM  <span className="brandColor">KANA</span>THE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/#contactus">Contact</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
