import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";
import UserIndex from "./components/user/Index";
import UserCreate from "./components/user/Create";
import UserUpdate from "./components/user/Update";

// build the router
const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="user" component={User}>
                <IndexRoute component={UserIndex}/>
                <Route path="create" component={UserCreate}/>
                <Route path="update/:id" component={UserUpdate}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

// export
export {router};