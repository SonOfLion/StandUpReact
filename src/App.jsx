import React from 'react'
import Home from './Home';
import Users from './Users';
import User from './User';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

const App = () => {

    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <a href="/">Home</a></li>
                    <li className="navigation__item"><a href="/users">Users</a></li>
                </ul>
                <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/users" component={Users}></Route>
                </Switch>
            </BrowserRouter>
        </div >
    );
};

export default App