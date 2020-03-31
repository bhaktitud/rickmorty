import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchDetails(url) {
    const [ characterProfile, setCharacterProfile ] = useState({location: {}, origin: {}})
    const [ mutualChars, setMutualChars ] = useState([])
  
    useEffect(() => {
        console.log('masuk use effect 1')
        axios({
            method: 'GET',
            url: url
        })
            .then(({ data }) => {
                // console.log(data.location.url)
                setCharacterProfile(data)
                if(data.location.url !== ""){
                  return Promise.all([axios.get(data.location.url)])
                } else {
                  return data
                }
            })
            .then(([ data ]) => {
              const { residents } = data.data
              const arrayPromises = []
              console.log(residents, 'dari promise all')
              residents.forEach(element => {
                  arrayPromises.push(axios.get(element))          
              });
              return Promise.all(arrayPromises)
            })
            .then(( data ) => {
              console.log(data, 'dari then ke 2')
              setMutualChars(data)
            })
            .catch((err) => {
                console.log(err, 'malah error')
            });
      }, [])

      return { characterProfile, mutualChars }
}