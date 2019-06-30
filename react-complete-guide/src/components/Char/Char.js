import React from 'react';

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
  cursor: 'pointer'
};

const Char = ({char, index, deleteChar}) => {
  return (
    <li style={style}
        className="char-component"
        onClick={deleteChar.bind(this, index)}
    >
      {char}
    </li>
  );
};

export default Char;