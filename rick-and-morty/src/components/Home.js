import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useFetcher from '../customHooks/useFetch'

function Home() {

  const [ name, setName ] = useState("")
  const [ filtered, setFiltered ] = useState([])

  //custom hooks
  const { characters, loading, error } = useFetcher('https://rickandmortyapi.com/api/character/')

  const handleOnChange = event => {
    event.preventDefault();
    setName(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {
    // console.log(characters, 'dari filter')
    const results = characters.filter(character => 
      character.name.toLowerCase().includes(name)
    )
    setFiltered(results)
  }, [characters, name]);

  if (loading) {
    return <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_qFttfS.json"
            className="lottie01"
            background="transparent"
            speed = "1"
            style = {
              { width: "50px" }
            }
            loop
            autoplay >
          </lottie-player>
  }

  if(error) return <p>Error...</p>

  return (
    <>
    console.log(filtered)
    <div className="custom-minitopbar">
      <div>
        <form>
          <input type="text" placeholder="type char's name ..." value={name} onChange={handleOnChange} />
          <p>Main Characters</p>
        </form>
      </div>
    </div>
      <div className="container custom-spacing">
        <Row className="justify-content-md-center row-cards" md={3}>
          {filtered.map((character) => (
            <Col key={character.id}>
              <div className="image-area">
                <div className="img-wrapper">
                  <Link to={`/details/${character.id}`}>
                        <img src={character.image} alt="card" />
                        <h2>{character.name}</h2>
                    </Link>
                    </div>
                  </div>
            </Col>
            
          ))}
        </Row>

      </div>
      </>
  )
}


export default Home;
