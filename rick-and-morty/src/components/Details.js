import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function Details({ match }) {
  const [ characterProfile, setCharacterProfile ] = useState({})
  const [ characterLocation, setCharacterLocation ] = useState({})
  const [ characterOrigin, setCharacterOrigin ] = useState({})

  useEffect(() => {
    axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character/${match.params.id}`
    })
        .then(({ data }) => {
            console.log(data)
            setCharacterProfile(data)
            setCharacterLocation(data.location)
            setCharacterOrigin(data.origin)
        }).catch((err) => {
            console.log(err)
        });
  }, [])

  return (
    <>
      <div className="detail-container">
        <div class="profile-img-container">
          <img class="character-profile-img" src={characterProfile.image} alt="character's image"></img>
        </div>
        <div class="details-content-left">
          <h3 class="character-profile-name-text"> {characterProfile.name} </h3>
          <ul class="detail-list">
            <li> <p> <strong> Status : {characterProfile.status} </strong> </p> </li>
            <li> <p> <strong> Gender : {characterProfile.gender} </strong> </p></li>
            <li> <p> <strong> Species : {characterProfile.species} </strong> </p></li>
            <li> <p> <strong> Location : {characterLocation.name} </strong> </p></li>
            <li> <p> <strong> Origin : {characterOrigin.name} </strong> </p></li>
          </ul>
        </div>
      </div>
    </>
  )

}


export default Details;
