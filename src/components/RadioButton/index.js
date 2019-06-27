import React, { Fragment } from 'react';
import Label from '../Label';

import './styles.scss';

const RadioButton = props => {
    const { name, id, value, handleRadioChange, className } = props;
    return (
        <Fragment>
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={handleRadioChange}
            />
            <Label htmlFor={id} text={value} className={className} />
        </Fragment>
    );
};

export default RadioButton;
