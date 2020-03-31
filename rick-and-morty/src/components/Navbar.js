import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function NavTopBar() {
  return (
    <>
      <nav className="border border-secondary fixed navtopbar">
        <div className="nav-brand">
          <img className="poster animated infinite pulse delay-2s" src="rickmortyposter.png"></img>
        </div>
        <div className="collapsible">
        </div>
      </nav>
    </>
  )
}


export default NavTopBar;
