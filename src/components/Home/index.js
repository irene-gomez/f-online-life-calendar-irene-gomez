import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const faceMood = mood => {
    if (mood === ':)') {
        return 'happy';
    } else {
        return 'sad';
    }
};

const showDate = date => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8);
    return `${day}-${month}-${year}`;
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
                                    className={`face face--${faceMood(mood.mood)}`}
                                >
                                    <div className="wrapper__tooltip">
                                        <p className="tooltip">{showDate(mood.date)}</p>
                                        <p className="tooltip">{mood.message}</p>
                                    </div>
                                </div>
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
