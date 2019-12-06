import React from 'react';

function PlayerCard(props) {
  console.log(props);
  return(
    <div>
      {props.player.map(player => {
        <div key={player.id} className='cardContain'>
          <div className='playerCard'>
            <h1>Name: {player.name}</h1>
            <h3>Country: {player.country}</h3>
          </div>
        </div>
      })}
    </div>
  )
}

export default PlayerCard;
