import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AddMood from '../AddMood';

import './styles.scss';

class App extends Component {
    // constructor(props) {
	// 	super(props);
		
    // }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add-mood" component={AddMood} />
                </Switch>
            </div>
        );
    }
}

export default App;
