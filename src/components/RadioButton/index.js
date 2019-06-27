import React, { Fragment } from 'react';

import './styles.scss';

const RadioButton = props => {
    const { name, id, value, handleRadioChange } = props;
    return (
        <Fragment>
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={handleRadioChange}
            />
            <label htmlFor={id}>{value}</label>
        </Fragment>
    );
};

export default RadioButton;
