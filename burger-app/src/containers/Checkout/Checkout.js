import React, {Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summery = <Redirect to="/"/>;

  if (props.ings) {
    summery =
      <Fragment>
        {props.purchased ? <Redirect to="/"/> : null}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}/>
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </Fragment>
  }

  return (
    <div>
      {summery}
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);