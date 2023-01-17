import React from 'react';

const Display = ({ input }) => {
  return (
    <div>
      <ul>
        {input.map((phrase) =>(
          <li key={phrase} value={phrase}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
};

export default Display;