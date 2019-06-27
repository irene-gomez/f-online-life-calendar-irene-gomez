import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AddMood from '../AddMood';

import './styles.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyMood: []
        };
    }

    render() {
        const { historyMood } = this.state;
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/add-mood"
                        render={routerProps => (
                            <AddMood historyMood={historyMood} />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
