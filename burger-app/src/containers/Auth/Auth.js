import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';
import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';

import classes from './Auth.css';

const Auth = (props) => {

  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    },
  });

  const [isSignup, setIsSignup] = useState(true);

  const {onSetAuthRedirectPath, buildingBurger, authRedirectPath} = props;

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }, [onSetAuthRedirectPath, buildingBurger, authRedirectPath]);

  const inputChangedHandler = (event, controllName) => {

    const updatedControls = updateObject(controls, {
      [controllName]: updateObject(controls[controllName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controllName].validation),
        touched: true
      })
    });

    setControls({controls: updatedControls});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAuth(controls.email.value, controls.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    setIsSignup((prevState) => {
      return {
        isSignup: !prevState.isSignup
      }
    })
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (props.loading) {
    form = <Spinner/>
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }

  let redirect = null;
  if (props.isAuthenticated) {
    redirect = <Redirect to={props.authRedirectPath}/>;
  }

  return (
    <div className={classes.Auth}>
      {redirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success" >SUBMIT</Button>
      </form>
      <Button btnType="Dander" clicked={switchAuthModeHandler}>SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  }
};

const mapDispatchToProps = dispatch => {

  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);