import React, {Component} from 'react';
//
import Counter from './components/counter';

class Counters extends Component {

    render() {
        const {counters ,onReset, onIncrement, onDelete, onDecrement} = this.props;

        console.log('counters - render');
        return (
            <div>
                <button onClick={onReset} className="btn btn-warning btn-sm m-3">Reset</button>
                {counters.map(c => <Counter key={c.id} counter={c} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} ><h3>Counter {c.id}</h3></Counter>)}
            </div>
        );
    }
}

export default Counters;