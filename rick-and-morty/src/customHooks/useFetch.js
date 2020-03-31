import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetcher(url) {
    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    
    useEffect(() => {
        setLoading(true);
        axios({
          method: 'GET',
          url: url
        })
        .then(({ data }) => {
          const { results } = data
          setCharacters(results);
          // results.filter(chars => {
          //   chars.name.toLowerCase().includes(name)
          // })
        }).catch((err) => {
          console.log(err)
          setError(err);
        }).finally(() => {
          setLoading(false)
        })
      }, []);

      return { characters, loading, error }
}