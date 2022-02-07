import React from 'react';

const Button = (props) => {
  return <div>
         <button onClick={props.handleAllClick}>{props.text}</button>
         </div>;
};

export default Button;
