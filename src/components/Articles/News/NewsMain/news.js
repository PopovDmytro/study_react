import React, {Component} from 'react';
//
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';

class NewsMain extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                    type="featured"
                    start={0}
                    amount={3}
                    settings={{
                        dots:false
                    }}
                />
                <NewsList
                    type="media"
                    loadmore={true}
                    start={3}
                    amount={10}
                />
            </div>
        );
    }
}

export default NewsMain;
