import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aside from '../aside/Aside';
import Users from '../pages/Users';
import UserProfile from '../pages/UserProfile';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Aside />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Users />
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