import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch , useSelector } from 'react-redux';
import { FETCH_DETAIL } from '../actions';

function Details({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const url = `https://rickandmortyapi.com/api/character/${match.params.id}`

  useEffect(() => {
    dispatch(FETCH_DETAIL(url))
  }, [url])

  const characterDetail = useSelector(state => state.characterDetail)
  const residentsList = useSelector(state => state.residentsList)
  console.log(characterDetail, 'detail komponen')
  
  //route
  function handleClick (id) {
    console.log(id)
    history.push(`/details/${id}`)
  }

  return (
    <>
      <div className="detail-container">
        <div className="profile-img-container">
          <img className="character-profile-img" src={characterDetail.image} alt="character"></img>
        </div>
        <div className="details-content-left">
          <h3 className="character-profile-name-text"> {characterDetail.name} </h3>
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
