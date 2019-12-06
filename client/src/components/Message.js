import React from 'react';
import { CustomToggle } from './CustomToggle';

export const Message = () => {
  const [love, toggleLove] = CustomToggle(true);
  
  return (
    <div>
      <h1 data-testid='h1'>{love ? `I love women's soccer!` : `I am indifferent about women's soccer!`}</h1>
      <button onClick={toggleLove} data-testid='button'>Change My Mind!</button>
    </div>
  )
}
