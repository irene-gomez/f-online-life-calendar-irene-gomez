import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const AddMood = () => {
    return (
        <Fragment>
            <p>AddMood</p>
            <Link to="/">Home</Link>
        </Fragment>
    );
}
 
export default AddMood;