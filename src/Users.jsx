import React,{Component} from 'react';
import User from './User';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

class Users extends Component {
    render() {
        const {match}=this.props;
        return (
            <BrowserRouter>
            <div className="page__content">
                <h1>Users</h1>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/users/github">Github</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/users/facebook">Facebook</Link>
                    </li>
                </ul>
                <Route  path={match.path}>
                    <span>Select user please</span>
                </Route>
                <Route path={`${match.path}/:userName`} component={User}></Route>
            </div>
            </BrowserRouter>)
    };
};

export default Users