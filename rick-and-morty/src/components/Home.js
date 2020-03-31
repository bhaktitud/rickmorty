import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useFetcher from '../customHooks/useFetch'

function PersonalDetails(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Personal Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function LocationDetails(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Location Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function EpisodeDetails(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Episode Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Home() {

  // const [ characters, setCharacters ] = useState([])
  // const [ loading, setLoading ] = useState(false)
  // const [ error, setError ] = useState(null)

  const [ name, setName ] = useState("")

  const [personalModalShow, setPersonalModalShow] = useState(false);
  const [locationModalShow, setLocationModalShow] = useState(false);
  const [episodeModalShow, setEpisodeModalShow] = useState(false);

  //custom hooks
  const { characters, loading, error } = useFetcher('https://rickandmortyapi.com/api/character/')

  // useEffect(() => {
  //   setLoading(true);
  //   axios({
  //     method: 'GET',
  //     url: 'https://rickandmortyapi.com/api/character/'
  //   })
  //   .then(({ data }) => {
  //     const { results } = data
  //     setCharacters(results);
  //     // results.filter(chars => {
  //     //   chars.name.toLowerCase().includes(name)
  //     // })
  //   }).catch((err) => {
  //     console.log(err)
  //     setError(err);
  //   }).finally(() => {
  //     setLoading(false)
  //   })
  // }, []);

  if (loading) {
    return <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_qFttfS.json"
            className="lottie01"
            background="transparent"
            speed="1"
            loop
            autoplay >
          </lottie-player>
  }

  if(error) return <p>Error...</p>

  const handleOnChange = event => {
    event.preventDefault();
    setName(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
    <div className="custom-minitopbar">
      <div>
        <form>
          <input type="text" placeholder="type char's name ..." value={name} onChange={handleOnChange} />
        </form>
      </div>
    </div>
      <div className="container custom-spacing">
        <Row className="justify-content-md-center row-cards" md={3}>
          {characters.map((character) => (
            <Col key={character.id}>
              <div className="image-area">
                <div className="img-wrapper">
                  <Link to={`/details/${character.id}`}>
                        <img src={character.image} alt="card image" />
                        <h2>{character.name}</h2>
                    </Link>
                        <ul>
                          <li><a href="#" onClick={() => setPersonalModalShow(true)}><i className="fas fa-id-badge"></i></a></li>
                          <li><a href="#" onClick={() => setLocationModalShow(true)}><i className="fas fa-map-marked-alt"></i></a></li>
                          <li><a href="#" onClick={() => setEpisodeModalShow(true)}><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                  </div>
            </Col>
            
          ))}
        </Row>

        <PersonalDetails
        show={personalModalShow}
        onHide={() => setPersonalModalShow(false)}
        />

        <LocationDetails
        show={locationModalShow}
        onHide={() => setLocationModalShow(false)}
        />

        <EpisodeDetails
        show={episodeModalShow}
        onHide={() => setEpisodeModalShow(false)}
        />

      </div>
      </>
  )
}


export default Home;
