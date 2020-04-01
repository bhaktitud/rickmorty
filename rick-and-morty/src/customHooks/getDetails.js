import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchDetails(url) {
    const [ characterProfile, setCharacterProfile ] = useState({ location: {}, origin: {} })
    const [ mutualChars, setMutualChars ] = useState([])
    const arrayPromises = []
  
    useEffect(() => {
        axios({
            method: 'GET',
            url: url
        })
            .then(({ data }) => {
                setCharacterProfile(data)
                if(data.location.url !== ""){
                  return Promise.all([axios.get(data.location.url)])
                }
            })
            .then(( [data] ) => {
              const { residents } = data.data
              residents.forEach(element => {
                  arrayPromises.push(axios.get(element))          
              });
              return Promise.all(arrayPromises)
            })
            .then(( data ) => {
              setMutualChars(data)
            })
            .catch((err) => {
                console.log(err, 'malah error')
            });
      }, [url])

      return { characterProfile, mutualChars }
}