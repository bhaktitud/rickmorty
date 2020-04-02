import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch , useSelector } from 'react-redux';
import { FETCH_DETAIL, addFavourite } from '../store/actions';

function Details({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const url = `https://rickandmortyapi.com/api/character/${match.params.id}`

  useEffect(() => {
    dispatch(FETCH_DETAIL(url))
  }, [url, dispatch])

  const loading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.isError)
  const characterDetail = useSelector(state => state.characterDetail)
  const residentsList = useSelector(state => state.residentsList)
  
  //route
  function handleClick (id) {
    history.push(`/details/${id}`)
  }

  function handleOnFavourite(favCharacter) {
    dispatch(addFavourite(favCharacter))
  }

  if (loading) {
    return <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_qFttfS.json"
            className="lottie01"
            background="transparent"
            speed = "1"
            loop
            style = {{width: "50em", margin: "0 0 0 27%"}}
            autoplay >
          </lottie-player>
  }

  if(error) {
    return (
      <img src="error.svg" alt="error"><p>Error...</p></img>
    )
  }

  return (
    <>
      <div className="detail-container">
        <div className="profile-img-container">
          <img className="character-profile-img" src={characterDetail.image} alt="character"></img>
        </div>
        <div className="details-content-left">
          <div className="name-and-fav">
            <h3 className="character-profile-name-text"> {characterDetail.name} </h3>
            <button className="btn btn-primary fav-btn-detail" onClick={() => handleOnFavourite(characterDetail)}> <i className="fas fa-star"></i></button>
          </div>
          <ul className="detail-list">
            <li className="parallelogram"> <p> <strong> Status : {characterDetail.status} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Gender : {characterDetail.gender} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Species : {characterDetail.species} </strong> </p> </li>
          </ul>
          
        </div>
        </div>
        <div className="mutual-container">
          <div>
            <h5 className="character-profile-name-text custom-font-h5">Characters Who Live in the Same Location</h5>
          </div>
          <div className="mutual-chars-container">
            {residentsList && residentsList.map((char) => (
              <img key={char.data.id} className="mutual-chars-img" src={char.data.image} alt="mutual characters" onClick={() => handleClick(char.data.id)}></img>
            ))}
          </div>
        </div>
    </>
  )

}

export default Details;
