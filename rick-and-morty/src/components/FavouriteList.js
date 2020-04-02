import React from 'react';

import { useSelector } from 'react-redux'

function FavouriteList () {

    const favouriteChars = useSelector(state => state.favouriteCharacter)
    console.log(favouriteChars, 'favourite')
    return (
        <>
        <div className="favourite-container">
            <img className="fav-icon" src="https://png2.cleanpng.com/sh/9215a15a5ccc186a950e66aea79c64a5/L0KzQYm3VsI5N6ZufZH0aYP2gLBuTgBwe6Vqip9CYXzvPbTzigAuaaN5ReRyY3uwcbBrTf1weqVARadrM0S7dYW6WPJjOWQ6Rqo9MUe8SYKAUcU0OGI8SKs9N0W6QoO1kP5o/kisspng-poster-wall-clip-art-rick-and-morty-5b348e438bb135.8417991715301709475722.png" alt="altfav"></img>
            <div>
                <p className="character-profile-name-text size-favourite-text">Favourite List</p>
            </div>
            <div className="fav-img-container">
                { favouriteChars.map((character) => (
                    <img className="fav-img" key={character.id} src={character.image} alt="favourite"></img>
                ))}
            </div>
        </div>
        </>
    )
}


export default FavouriteList