import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';

class TransitionComponent extends Component {

    state = {
        show: true
    };

    showDiv = () => {
        this.setState({
            show: !this.state.show
        })
    };

    render() {
        return (
            <div>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter: 2000,
                        exit: 10
                    }}

                    enter={true}
                    exit={false}

                    onExited={(node) => {console.log('Exited')}}
                    onExit={(node) => {console.log('Exit')}}
                    onEnter={(node) => {console.log('Enter')}}


                >
                    { state =>
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    }
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>
        );
    }
}

export default TransitionComponent;
