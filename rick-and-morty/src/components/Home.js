import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/'
    })
    .then(({ data }) => {
      const { results } = data
      this.setState({
        characters: results
      })
    }).catch((err) => {
      console.log(err)
    });

    // const fetchCharacters = async () => {
        // const fetchCharacters = await fetch(
        //     'https://rickandmortyapi.com/api/character/'
        // );
        // const characters =  await fetchCharacters.json();
    // };
  }

  render () {
    const { characters } = this.state
    return (
        <>
          <div className="container custom-spacing">
            <Row className="justify-content-md-center row-cards" md={3}>
              {characters.map((character) => (
                <Col key={character.id}>
                  <Card className="custom-card" border="secondary" style={{ width: '18rem' }}>
                    <Link to={`/details/${character.id}`}>
                        <img className="card-img" src={character.image} alt="Bologna"></img>
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
  
}

export default Home;
