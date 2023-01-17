import React from 'react';

export default function Characters({
  head, middle, bottom }) {
  return (
    <div>
      <div className ="character">
        <ul>

          <li><img className="head" src = { `./${head}-cage.png`}></img></li>
          <li> <img className="middle" src = { `./${middle}-torso.png`}></img></li> 
          <li> <img className="bottom" src = { `./${bottom}-pants.png`}></img></li> 
        </ul>
      </div>
    </div>
  );
}