import React from 'react';

const CategoryList = ({onCategoryIdChange, genres, selectedGenre, textProperty, valueProperty}) => {
    return (
        <div className="list-group" id="list-tab" role="tablist">
            {genres.map(genre => (
                <a onClick={() => {onCategoryIdChange(genre)}} key={genre[valueProperty]} className={"list-group-item list-group-item-action" + (selectedGenre[valueProperty] === genre[valueProperty] ? ' active' : null)} data-toggle="list"
                   href={"#" + genre[textProperty].toLowerCase()} role="tab" aria-controls="home">{genre[textProperty]}</a>
            ))}
        </div>
    );
};

CategoryList.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default CategoryList;
