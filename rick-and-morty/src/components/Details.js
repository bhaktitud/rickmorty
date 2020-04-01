import React from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import useFetchDetails from '../customHooks/getDetails';

function Details({ match }) {
  const history = useHistory();
  const { characterProfile, mutualChars } = useFetchDetails(`https://rickandmortyapi.com/api/character/${match.params.id}`)

  //route
  function handleClick (id) {
    history.push(`/details/${id}`)
  }

  return (
    <>
      <div className="detail-container">
        <div className="profile-img-container">
          <img className="character-profile-img" src={characterProfile.image} alt="character"></img>
        </div>
        <div className="details-content-left">
          <h3 className="character-profile-name-text"> {characterProfile.name} </h3>
          <ul className="detail-list">
            <li className="parallelogram"> <p> <strong> Status : {characterProfile.status} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Gender : {characterProfile.gender} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Species : {characterProfile.species} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Location : {characterProfile.location.name} </strong> </p> </li>
            <li className="parallelogram"> <p> <strong> Origin : {characterProfile.origin.name} </strong> </p> </li>
          </ul>
        </div>
        </div>
        <div className="mutual-container">
          <div>
            <h5 className="character-profile-name-text custom-font-h5">Characters Who Live in the Same Location</h5>
          </div>
          <div className="mutual-chars-container">
            {mutualChars.map((char) => (
              <img key={char.data.id} className="mutual-chars-img" src={char.data.image} alt="mutual characters" onClick={() => handleClick(char.data.id)}></img>
            ))}
          </div>
        </div>
    </>
  )

}

export default Details;
