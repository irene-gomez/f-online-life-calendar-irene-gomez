import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const faceMood = props => {
    console.log(props);
    if (props === ':)') {
        return 'happy';
    } else {
        return 'sad';
    }
};

const Home = props => {
    const { historyMood } = props;
    return (
        <Fragment>
            <header className="main-header">
                <Link to="/add-mood">
                    <div className="add__mood" />
                </Link>
            </header>
            <main className="main-content">
                {historyMood.length !== 0 ? (
                    <ul className="mood__list">
                        {historyMood.map((mood, index) => (
                            <li key={index} className="mood__item">
                                <div
                                    className={`face face--${faceMood(
                                        mood.mood
                                    )}`}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="user-info">Todavía no se ha añadido ningún estado.</p>
                )}
            </main>
        </Fragment>
    );
};

export default Home;
