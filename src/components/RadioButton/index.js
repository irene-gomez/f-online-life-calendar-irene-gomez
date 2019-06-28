import React, { Fragment } from 'react';
import Label from '../Label';

import './styles.scss';

const RadioButton = props => {
    const { name, id, value, handleRadioChange, classNameDiv, classNameLabel } = props;
    return (
        <div className={classNameDiv}>
            <input
                type="radio"
                className="radio"
                name={name}
                id={id}
                value={value}
                onChange={handleRadioChange}
            />
            <Label htmlFor={id} text={value} className={classNameLabel} />
        </div>
    );
};

export default RadioButton;
