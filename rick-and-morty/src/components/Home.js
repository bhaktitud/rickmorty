import React, { useState, useEffect } from 'react';
import useFetcher from '../customHooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addFavourite } from '../actions';
import { connect } from 'react-redux';

import FavouriteList from '../components/FavouriteList'


function Home({ dispatch }) {

  const [ name, setName ] = useState("")
  const [ filtered, setFiltered ] = useState([])

  //custom hooks
  const { characters, loading, error } = useFetcher('https://rickandmortyapi.com/api/character/')

  const handleOnChange = event => {
    event.preventDefault();
    setName(event.target.value)
  }

  function handleOnFavourite(favCharacter) {
    dispatch(addFavourite(favCharacter))
  }

  useEffect(() => {
    const results = characters.filter(character => 
      character.name.toLowerCase().includes(name.toLowerCase())
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
    <div className="custom-minitopbar">
      <div>
        <form>
          <div>
            <img className="filter-image" src="https://png2.cleanpng.com/sh/0564d28b649a076fef94b1b47fc722ae/L0KzQYm3VsI1N6p1i5H0aYP2gLBuTgJqa5wyi9N3Y3join70jCJ1gV54hdt9aD3ngrLAif5oNZJzgd9qdHXnPbfwjP0ua5J3ReRyY3uwg7L1gBhmgl46eqRvZUPmc4jsgBY5PV83TaYBOUi6RIK8Usk5PmY2TqYAMUm3PsH1h5==/kisspng-rick-sanchez-morty-smith-drawing-animated-film-car-rick-sanchez-5b2fe3cc7ecf85.2546987415298651645194.png" alt="morty"></img>
          </div>
          <input className="filter-type" type="text" placeholder="Filter char's name ..." value={name} onChange={handleOnChange} />
        </form>
      </div>
    </div>
    <FavouriteList></FavouriteList>
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
                    <ul>
                      <li onClick={() => handleOnFavourite(character)}><i className="fas fa-heart fa-lg"></i></li>
                    </ul>
                    </div>
                  </div>
            </Col>
            
          ))}
        </Row>

      </div>
      </>
  )
}


export default connect()(Home);
