import React, { Component } from "react";

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this); //or rewrite as arrow function
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server
        }
    }

    componentWillUnmount() {
        console.log('counter unmount');
    }

    render() {

        const {id} = this.props.counter;
        console.log('counter - render');
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">{this.props.children}</div>
                    <div className="col-2">
                        <h3 className={this.getBadgeClasses()}>{this.formatCount()}</h3>
                    </div>
                    <div className="col-4">
                        <button
                            onClick={() => {this.props.onIncrement(this.props.counter)}}
                            className="btn btn-secondary btn-sm m-1"
                        >
                            +
                        </button>
                        <button
                            onClick={() => {this.props.onDecrement(this.props.counter)}}
                            className={"btn btn-secondary btn-sm m-1"}
                            disabled={!this.props.counter.value}
                        >
                            -
                        </button>
                        <button onClick={() => {this.props.onDelete(id)}} className="btn btn-sm m-1 btn-danger">&#10005;</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    formatCount() {
        return !this.props.counter.value ? "Zero" : this.props.counter.value;
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += !this.props.counter.value ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
