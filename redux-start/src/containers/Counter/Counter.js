import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import * as actionTypes from '../../store/actions/actions';
import * as actionCreator from '../../store/actions/index';


class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return {counter: prevState.counter + 1}
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return {counter: prevState.counter - 1}
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return {counter: prevState.counter + value}
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return {counter: prevState.counter - value}
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
        <hr/>
        <button onClick={() => {this.props.onStoreResult(this.props.ctr)}}>Store Result</button>
        <ul>
          {this.props.storedResults.map((strResult, i)=> (
            <li onClick={() => {this.props.onDeleteResult(strResult.id)}} key={strResult.id}>{strResult.val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const maDispatchToProps = (dispatch) => {

  return {
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onAddCounter: (val = 10) => dispatch(actionCreator.add(val)),
    onSubtractCounter: (val = 15) => dispatch(actionCreator.subtract(val)),
    onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id)),
  };
};

export default connect(mapStateToProps, maDispatchToProps)(Counter);