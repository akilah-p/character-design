import React from 'react';

const Display = ({ input }) => {
  return (
    <div>
      
      {input.map((phrase) =>(
        <div key={phrase} value={phrase}>{phrase}</div>
      ))}
      
    </div>
  );
};

export default Display;