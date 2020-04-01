import React from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavTopBar() {

  const history = useHistory()

  function handleClick () {
    history.push('/')
  }

  return (
    <>
      <nav className="border border-secondary fixed navtopbar">
        <div className="nav-brand">
          <img className="poster animated infinite pulse delay-2s" src="rickmortyposter.png" alt="rickmortyposter.png" onClick={() => handleClick()}></img>
        </div>
      </nav>
    </>
  )
}


export default NavTopBar;
