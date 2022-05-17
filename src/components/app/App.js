import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aside from '../aside/Aside';
import Users from '../pages/Users';
import UserProfile from '../pages/UserProfile';

const App = () => {
    const [sort, setSort] = useState('');
    const updateSort = (value) => {
        setSort(value)
    };

    return (
        <Router>
            <div className="app">
                <Aside updateSort={updateSort} />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Users sort={sort} />
                        </Route>
                        <Route exact path="/profile/:id">
                            <UserProfile />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;