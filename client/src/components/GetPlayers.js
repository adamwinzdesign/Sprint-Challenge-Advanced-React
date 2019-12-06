import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import { Message } from './Message';

class GetPlayers extends React.Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      player: []
    };
    // console.log('Constructicons Assemble!');
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        if(this._isMounted) {
          this.setState({player: res.data})
        }
      })
      .catch(error => console.log(error.response));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return(
      <div>
        <Message />
        <PlayerCard player={this.state.player} />
      </div>
    )
  }
}

export default GetPlayers;
