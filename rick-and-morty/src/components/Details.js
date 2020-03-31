import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function Details({ match }) {
  const [ characterProfile, setCharacterProfile ] = useState({})

  useEffect(() => {
    axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character/${match.params.id}`
    })
        .then(({ data }) => {
            console.log(data.location.name)
            setCharacterProfile(data)
        }).catch((err) => {
            console.log(err)
        });
  }, [])

  return (
    <>
      <div className="character-image">
        <img className="character-profile-img" src={characterProfile.image} alt="img"></img>
        <div className="character-profile-name" border="secondary">
            <h2 className="character-profile-name-text"> - {characterProfile.name} -</h2>
        </div>
      </div>

      <div className="detail-container">
        <div className="profile-detail">
            <div>
                <p>{characterProfile.status} </p>
            </div>
            <div>
                <p>{characterProfile.gender}</p>
            </div>
            <div>
                <p>{characterProfile.species}</p>
            </div>
        </div>
      
        <div className="mutual-residents">
          <div>
              <p>Mutual Residents</p>
          </div>
        </div>
      </div>

    </>
  )

}


export default Details;
