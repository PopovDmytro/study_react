import React, { Component } from "react";
//
import "./App.scss";
//
// import Counter from "./components/counter";
import Vidly from "./Vidly/vidly";
import Navigation from './Navigation/navigation';
import Counters from './Counters/counters';

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            counters: [
                {id: 1, value: 3},
                {id: 2, value: 0},
                {id: 3, value: 0},
                {id: 4, value: 0}
            ]
        };

        console.log('constructor');
    }

    componentDidMount() {
        console.log('did mount');

        //Ajax call
        // this.setState({});
    }

    handleDelete = (id) => {
        const filteredArr = this.state.counters.filter((el) => el.id !== id );
        this.setState({counters: filteredArr});
    };

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0; return c;
        });

        this.setState({counters});
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if(counters[index].value) {
            counters[index].value--;
            this.setState({counters});
        }
    };

    render() {
        console.log('render');

        return (
            <React.Fragment>
                <Navigation totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    {/*<Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} counters={this.state.counters} />*/}
                    <Vidly />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
