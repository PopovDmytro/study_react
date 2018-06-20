import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

class Lifecycles extends PureComponent {

    //1 get default props

    //2 set default state
    state = {
        title: 'title'
    };
    /*
    //5 after jsx
    componentDidMount() {
        console.log('//5 after jsx');
        document.querySelector('h1').style.color = 'red';
    }
    //3 before render
    componentWillMount() {
        console.log('//3 before render');
    }
    //react 17+
    UNSAFE_componentWillMount() {}

    getDerivedStateFromProps(){
    }

    componentWillUpdate() {
        console.log('Before update');
    }
    //react 17+
    UNSAFE_componentWillUpdate() {}

    getSnapshotBeforeUpdate(){
    }

    componentDidUpdate() {
        console.log('After update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state.title);
        // console.log(nextState);

        if(nextState.title === this.state.title) {
            return false; //app will not re render
        }
        return true;
    }

    componentWillReceiveProps() {
        console.log('before receive props');
    }
    // react 17+
    UNSAFE_componentWillReceiveProps() {}

    componentWillUnmount () {
        console.log('unmount');
    }
    */
    //4 render jxs
    render() {
        console.log('render');
        return (
            <div>
                <h1>Life cycles {this.state.title}</h1>
                <div className="" onClick={() => {this.setState({title: 'something else'})}}>change text</div>
            </div>
        );
    }
}

// Lifecycles.propTypes = {};

export default Lifecycles;
