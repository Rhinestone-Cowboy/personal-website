import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Headers = () => {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">resume</Nav.Link>
            <NavDropdown title="contact me" id="basic-nav-dropdown" >
              <NavDropdown.Item className='item' href="mailto:diego.padilla2027@berkeley.edu">email</NavDropdown.Item> 
              <NavDropdown.Item className='item' href="https://www.linkedin.com/in/padilla-diego/">linked-in</NavDropdown.Item>
              <NavDropdown.Item className='item' href="https://www.instagram.com/">instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Headers
