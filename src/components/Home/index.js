import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Home = () => {
    return (
        <Fragment>
            <p>Home</p>
            <Link to="/add-mood">AddMood</Link>
        </Fragment>
    );
}
 
export default Home;