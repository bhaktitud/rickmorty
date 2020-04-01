import React from 'react';

import { useSelector } from 'react-redux'

function FavouriteList () {

    const favouriteChars = useSelector(state => state.addFav)
    console.log(favouriteChars, 'from favourite list component')

    return (
        <>
        <div className="favourite-container">
            <img className="fav-icon" src="https://png2.cleanpng.com/sh/be8e30124717be73e2225a43dd114552/L0KzQYm3WMI5N6F3jpH0aYP2gLBuTgJqa5wyi9N3Y3join70jCJ1gV54hdt9aD3zf7TyhgQudZD3jOt8LXHnhb37TgN4cZ4yTdQDNXazSIW6gcU3amEzTqs9MEK0RoW4VcM2PWE5TaMBMkO8PsH1h5==/kisspng-rick-sanchez-morty-smith-pocket-mortys-adult-swim-5b85f0843a56b0.694021641535504516239.png" alt="altfav"></img>
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