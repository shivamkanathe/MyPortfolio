import Button from "@restart/ui/esm/Button";
import React,{useState} from "react";
import { Col, Form, Row } from "react-bootstrap";
import "../styles/ContactPage.css";
import location from "../Images/location.svg";
import call from "../Images/call.png";
import emailImage from "../Images/email.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";

function ContactPage() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [contact, setContact] = useState("");
const [message, setMessage] = useState("");
const [openLoader,setOpenLoader] = useState(false);


const showToast = () => {
  toast.success("Your submission is successfull",{position: toast.POSITION.TOP_CENTER})
}

const handleSubmit = (e) => {
  e.preventDefault();
   if(firstName === "" || lastName === "" || email === "" || contact === "" || message === ""){
    return toast.error("Please enter all the fields",{position:toast.POSITION.TOP_CENTER});
   }
   else{
    display();
    setOpenLoader(true);
    setFirstName("")
    setLastName("")
    setEmail("")
    setContact("")
    setMessage("")
   }
}


const addDataIntoAirtable = async(obj) =>{
let data = {
    records:[
        {
            fields: obj
        }
    ]
}
const URL = 'https://api.airtable.com/v0/appBAcZ4qOGTuBvuI/Table%201?maxRecords=3&view=Grid%20view';
let submitted = await fetch(URL,{
    body:JSON.stringify(data),
    method: 'POST',
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer key4mc8crwoi9HSCG`
    }
}).then(response=>response.json())
.then(data=>{
  showToast();
  setOpenLoader(false);
})

console.log("Submitted data : ",submitted);
}

const display = () =>{

const obj = {
    "Name": firstName + " " + lastName,
    "Email": email,
    "Contact": contact,
    "Message": (message.length>0)?message:null,   
}
addDataIntoAirtable(obj);
}





  return (
    <div className="mainContact" id="contactus"> 
      <div className="container">
        <h1 className="contactHead">Let's Talk</h1>
        <Row className="mainRow">
            <Col lg={6} md={12} sm={12}>
            <div className="contactForm">
            <h2 className="touch">Get In Touch</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Control type="text" placeholder="First Name" className="inputChange" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group className="mb-3" controlId="formSecondName">
                  <Form.Control type="text" placeholder="Last Name" className="inputChange" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="text" placeholder="Email" className="inputChange" value={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Control type="text" placeholder="Contact" className="inputChange" value={contact}  onChange={e=>setContact(e.target.value)} />
            </Form.Group>
            <Form.Control as="textarea" rows={6} className="inputChange" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
            <Button variant="primary" type="submit" className="btn">
             {openLoader ? <Loader type="Puff" color="white" height={20} width={20} /> : "Send Message" } 
            </Button>
            <ToastContainer/>
          </Form>
        </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="detail">
                <div className="detailContainer">
                <h3 className="heading">Prince Nagar,Kushwaha Nagar,Indore,India</h3>
                  <div className="contct">
                    <img src={location} alt="address" className="contactImages"/>
                    <p>Offical Address</p>
                  </div>
                </div>
                <div className="detailContainer">
                <h3 className="heading">shivamkanathe@gmail.com</h3>
                  <div className="contct">
                    <img src={emailImage} alt="address" className="contactImages"/>
                    <p>official email</p>
                  </div>
                </div>
                
                <div className="detailContainer">
                <h3 className="heading">9644595849 &nbsp; 8319040004</h3>
                  <div className="contct">
                    <img src={call} alt="address" className="contactImages"/>
                    <p>Official contact</p>
                  </div>
                </div>
                
              </div>
            </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactPage;
