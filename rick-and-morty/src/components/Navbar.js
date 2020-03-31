import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';

function NavTopBar() {
  return (
    <>
        <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="">Rick & Morty</Navbar.Brand>
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


export default NavTopBar;
