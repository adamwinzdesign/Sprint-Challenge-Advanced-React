import { useState } from 'react';

export const CustomToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggleHandler = () => {
    setState(!state);
  }
  return [state, toggleHandler];
};