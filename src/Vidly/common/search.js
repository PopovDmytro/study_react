import React from 'react';

const Search = ({onSearchChange, searchValue}) => {
    return (
        <div>
            <div className="form-group">
                <label className='w-100'>
                    <input type="text"
                           value={searchValue}
                           className="form-control"
                           onChange={(e) => {onSearchChange(e.currentTarget.value)}}
                    />
                </label>
            </div>
        </div>
    );
};

export default Search;
