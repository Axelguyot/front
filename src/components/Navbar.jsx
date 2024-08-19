import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import logo from '../images/logo.png'





export const Navbar = () => {
  return (
    <>
     <BootstrapNavbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="/home"><img alt="" src= {logo} width="156"
              height="50" className='align-items-center'></img>
            </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            
          </Nav>
          <Nav className='d-flex justify-content-center align-items-center gap-3'>
            <Nav.Link href="/login" className='white-bold-text'>Log in</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className='text-white text decoration-none px-3 py-1 rounded-4' style={{backgroundColor: '#f94ca4'}}>
              Sign Up
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    </>
  );
}
