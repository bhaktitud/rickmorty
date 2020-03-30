import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, CardDeck, CardGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      name : '',
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
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { name, characters } = this.state

    const id = characters.length + 1
    const newChar = { id, name }

    this.setState({
      characters: characters.concat(newChar)
    })
  }

  render () {
    const { characters, name } = this.state
    return (
        <>
          <div className="container-fluid custom-spacing">
            <Row className="justify-content-md-center" md={6}>
              {characters.map((character) => (
                <Col key={character.id}>
                  <Card className="custom-card" border="secondary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                      <Card.Title>{character.name}</Card.Title>
                      <ul>
                        <li>{character.status}</li>
                        <li>{character.species}</li>
                        <li>{character.gender}</li>
                        <li>{character.origin.name}</li>
                      </ul>
                        <Link to='/details'>
                           <Button variant="primary">Details</Button>
                        </Link>
                      </Card.Body>
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
