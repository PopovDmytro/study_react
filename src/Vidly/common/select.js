import React from 'react';

const Select = ({options, name, label, value, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name}
                    id={name}
                    className="custom-select"
                    value={value? value : ''}
                    {...rest}
            >
                {!value && <option>Please make a choice !</option>}
                {options.map((option, i) => (<option key={i} value={option._id}>{option.name}</option>))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Select;
