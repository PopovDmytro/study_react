import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Slide extends Component {

    state = {
        items: []
    };

    addElements() {
        return this.state.items.map((item, i) => (
            <CSSTransition
                classNames="item"
                timeout={500}
                key={i}
                onEnter={(node) => {
                    node.classList.add("active")
                }}
            >
                <div className="item" key={i}>{item}</div>
            </CSSTransition>
        ));
    }

    generateNumber() {
        let newArr = [...this.state.items, Math.floor(Math.random() * 100) + 1]

        this.setState({
            items: newArr
        });
    }

    removeNumber() {
        let newArr = this.state.items.slice(0, -1);

        this.setState({
            items: newArr
        });
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.addElements()}
                </TransitionGroup>

                <div className="btns">
                    <div className="btn-add" onClick={() => this.generateNumber()}>Add element</div>
                    <div className="btn-remove" onClick={() => this.removeNumber()}>Remove element</div>
                </div>
            </div>
        );
    }
}

export default Slide;
