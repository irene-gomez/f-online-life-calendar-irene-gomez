import React, { Fragment } from 'react';
import Label from '../Label';

import './styles.scss';

const Input = props => {
    const { type, id, value, onChangeInput, labelText, className } = props;
    return (
        <Fragment>
            <Label htmlFor={id} text={labelText} className={className} />
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={onChangeInput}
            />
        </Fragment>
    );
};

export default Input;
