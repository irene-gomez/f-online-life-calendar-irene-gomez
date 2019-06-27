import React from 'react';

import './styles.scss';

const Label = props => {
    const { htmlFor, text, className } = props;
    return (
        <label htmlFor={htmlFor} className={className}>
            {text}
        </label>
    );
};

export default Label;
