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

    componentDidMount() {
        this.checkLocalStorage();
    }

    checkLocalStorage() {
        if (localStorage.getItem('historyMood') !== null) {
            const historyMood = JSON.parse(localStorage.getItem('historyMood'));
            this.setState({
                historyMood: historyMood
            });
        }
    }

    render() {
        const { historyMood } = this.state;
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={routerProps => <Home historyMood={historyMood} />}
                    />
                    <Route
                        path="/add-mood"
                        render={routerProps => <AddMood historyMood={historyMood} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
