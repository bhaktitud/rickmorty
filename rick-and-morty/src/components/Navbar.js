import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap';

class Details extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Rick & Morty</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
      )
  
  }
  
}

export default Details;
