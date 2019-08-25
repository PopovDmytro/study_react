import React from 'react';

import classes from './Order.scss'

const Order = ({ingredients, price}) => {

  const ingredientsArr = [];

  for (let ingredientName in ingredients) {
    ingredientsArr.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    })
  }

  return (
    <div className={classes.Order}>
      <p>Ingredients:
        {
          ingredientsArr.map((ig, i) => (
            <span
              style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 4px',
                padding: '4px 6px',
                border: '1px solid #ccc'
              }}
              key={i}>{ig.name} ({ig.amount})&nbsp;</span>
          ))
        }
      </p>
      <p>Price: <strong>USD {parseFloat(price).toFixed(2)}</strong></p>
    </div>
  );
};

export default Order;