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
          <h3 className="character-profile-name-text">Rick And Morty World</h3>
        </div>
      </nav>
    </>
  )
}

export default NavTopBar;
