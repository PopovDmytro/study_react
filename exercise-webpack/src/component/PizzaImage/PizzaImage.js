import React from 'react';

import classes from './PizzaImage.css';
import PizzaImg from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImg} alt="pizza" className={classes.PizzaImg}/>
    </div>
  );
};

export default PizzaImage;