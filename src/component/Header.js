import React from 'react'
import {Container,Nav,Button,FormControl,Form,NavDropdown,Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
 const Header=()=> {
     
  return (
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
      
    />
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default Header