import React from 'react';

const Validation = ({text}) => {
  return (
    <div>
      <p>{text.length > 5 ? 'Text long enough' : 'Text too short'}</p>
    </div>
  );
};

export default Validation;