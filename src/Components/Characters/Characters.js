import React from 'react';

export default function Characters({
  head, middle, bottom }) {
  return (
    <div>
      <div className ="character">
        <img className="head" src = { `./${head}-cage.png`}></img>
        <img className="middle" src = { `./${middle}-torso.png`}></img>
        <img className="bottom" src = { `./${bottom}-pants.png`}></img>
      </div>
    </div>
  );
}