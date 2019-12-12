import React from 'react';

const User = (props) => {
  return (
    <div>
      <div className="">
        {props.name}
      </div>
      <p>{props.age}</p>
      <style jsx>{`
        div {
          border: 1px solid red;
        }  
      `}</style>
    </div>
  );
};

export default User;