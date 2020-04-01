import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchDetails(url) {
    const [ characterProfile, setCharacterProfile ] = useState({ location: {}, origin: {} })
    const [ mutualChars, setMutualChars ] = useState([])
    const arrayPromises = []
  
    useEffect(() => {
        // console.log('masuk use effect 1')
        axios({
            method: 'GET',
            url: url
        })
            .then(({ data }) => {
                setCharacterProfile(data)
                console.log(data.location)
                if(data.location.url !== ""){
                  return Promise.all([axios.get(data.location.url)])
                  // return axios.get(data.location.url)
                }
            })
            .then(( [data] ) => {
              console.log(data)
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
      }, [])

      return { characterProfile, mutualChars }
}