import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Home = props => {
    const { historyMood } = props;
    console.log('historyMood HOME', historyMood);
    
    return (
        <Fragment>
            <header className="main-header">
                <Link to="/add-mood">AddMood</Link>
            </header>
            <main className="main-content">
                <ul className="mood__list">
                    {historyMood.map((mood, index) => (
                        <li key={index} className="mood__item">
                            {mood.mood}
                        </li>
                    ))}
                </ul>
            </main>
        </Fragment>
    );
};

export default Home;
