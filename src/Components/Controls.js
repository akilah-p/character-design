import React from 'react';

import Pick from '../components/Pick.js';

export default function Controls({
  head, middle, bottom, handleChange
}) {
  return (
    <div className="controls">
      <Pick 
        label="Head" options = {['stoic', 'yelling', 'vampire']} value={head} onChange={(e) =>
          handleChange ('head', e.target.value)} />
      <Pick 
        label="Middle" options = {['sitting', 'hands']} value={middle} onChange={(e) =>
          handleChange ('middle', e.target.value)} />
      <Pick 
        label="Bottom" options = {['cargo', 'khaki', 'skirt', 'fancy']} value={bottom} onChange={(e) =>
          handleChange ('bottom', e.target.value)} />
    </div>
  );
}