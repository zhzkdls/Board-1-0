import React from "react";
import {Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();

  const imagestyle = {
    height: "50px", 
    width: "50px",
  };

  return (
    <div id="nav">
      <Navbar fixed="top" bg="dark" variant="dark" className="container mx-auto my-3 py-3 rounded-4 shadow" expand={false}>
        <Container fluid>
          <Link to={"/"}>
            <img src="../img/logoSichu.png" style = {imagestyle} alt="시츄" id="logo" className="me-3" />
          </Link>
          <div className="d-flex" style={styles.move}>
            <Nav.Link href="/login" style={{color:"white"}}>로그인</Nav.Link>
          </div>
          <Navbar.Toggle className="border-0" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            backdrop="false"
          >
            <Offcanvas.Header closeButton>
              <Link to={"/"}>
                <img src="../img/logoSichu.png" alt="시츄" id="logo" className="me-3" 
                style={{height:"30px"}}/>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="border-bottom" href="/write">공지사항</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
  
}
const styles = {
    move : {
      position: 'absolute',
      right: '100px'
  },
}
  


export default Header;
