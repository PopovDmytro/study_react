import React, {Component} from 'react';
import PropTypes from 'prop-types';
//
import SliderTemplates from './slider_templates';
//
import axios from 'axios';

class NewsSlider extends Component {

    state = {
        news: []
    };

    componentWillMount() {
        axios.get(`http://localhost:3002/articles?_start=0&_end=3`).then( response => {
            this.setState({
                news: response.data
            })
        });
    }

    render() {
        return (
            <SliderTemplates data={this.state.news} />
        );
    }
}

NewsSlider.propTypes = {};

export default NewsSlider;
