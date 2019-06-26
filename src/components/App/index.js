import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AddMood from '../AddMood';

import './styles.scss';

function App() {
    return (
        <div className="App">
            <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/add-mood" component={AddMood} />
			</Switch>
        </div>
    );
}

export default App;
