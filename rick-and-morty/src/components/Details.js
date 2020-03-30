import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


class Details extends React.Component {
  constructor () {
    super();
    this.state = {
        character: []
    }
  }

  componentDidMount() {
    const { match } = this.props;
    axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character/${match.params.id}`
    })
        .then(({ data }) => {
            console.log(data, 'dari detail')
        }).catch((err) => {
            console.log(err)
        });
  }

  render () {
    return (
        <>
          <h1>test</h1>
        </>
      )
  
  }
  
}

export default Details;
