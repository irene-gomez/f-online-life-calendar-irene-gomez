import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Home = () => {
    return (
        <Fragment>
            <header className="main-header">
                <Link to="/add-mood">AddMood</Link>
            </header>
            <main className="main-content">
                <ul className="mood__list">
                    <li className="mood__item">:)</li>
                    <li className="mood__item">:(</li>
                    <li className="mood__item">:)</li>
                </ul>
            </main>
        </Fragment>
    );
}
 
export default Home;