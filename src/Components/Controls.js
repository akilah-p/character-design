import React from 'react';

import Pick from '../Components/Pick.js';

export default function Controls({
  head, middle, bottom, handleChange
}) {
  return (
    <div className="controls">
      <Pick 
        label="Head" options = {['stoic', 'yelling', 'vampire']} value={head} onChange={(e) =>
          handleChange ('head', e.target.value)} />
      <Pick 
        label="Middle" options = {['middle', 'sitting']} value={middle} onChange={(e) =>
          handleChange ('middle', e.target.value)} />
      <Pick 
        label="Bottom" options = {['cargo', 'khakis', 'skirts', 'fancy']} value={bottom} onChange={(e) =>
          handleChange ('bottom', e.target.value)} />
    </div>
  );
}