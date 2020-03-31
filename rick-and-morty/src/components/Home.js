import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/'
    })
    .then(({ data }) => {
      const { results } = data
      setCharacters(results)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  return (
    <>
      <div className="container custom-spacing">
        <Row className="justify-content-md-center row-cards" md={3}>
          {characters.map((character) => (
            <Col key={character.id}>
              <Card className="custom-card" border="secondary" style={{ width: '18rem' }}>
                <Link to={`/details/${character.id}`}>
                    <img className="card-img" src={character.image} alt="character"></img>
                    <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <h4 className="card-title">{character.name}</h4>
                    </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </>
  )
}


export default Home;
