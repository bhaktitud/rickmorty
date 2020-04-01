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
          <img className="poster animated infinite pulse delay-2s" src="https://png2.cleanpng.com/sh/9215a15a5ccc186a950e66aea79c64a5/L0KzQYm3VsI5N6ZufZH0aYP2gLBuTgBwe6Vqip9CYXzvPbTzigAuaaN5ReRyY3uwcbBrTf1weqVARadrM0S7dYW6WPJjOWQ6Rqo9MUe8SYKAUcU0OGI8SKs9N0W6QoO1kP5o/kisspng-poster-wall-clip-art-rick-and-morty-5b348e438bb135.8417991715301709475722.png" alt="rickmortyposter.png" onClick={() => handleClick()}></img>
        </div>
      </nav>
    </>
  )
}

export default NavTopBar;
