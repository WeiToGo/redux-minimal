import React from "react";
import {ProgressBar} from 'react-bootstrap';
import {connect} from "react-redux";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
class App extends React.Component {
    // pre-render logic
    componentWillMount() {
        this.props.dispatch({type: 'USERS_INIT'});
    }

    // render
    render() {
        const {users, children} = this.props;
        if (!users.length) {
            return (
                <div className="progress">
                    <ProgressBar active now={100}/>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <Menu/>
                    </div>
                    <div className="row">
                        {children}
                    </div>
                    <div className="row footer">
                        Simple users app built with {' '}
                        <a href="http://redux-minimal.js.org/" target="_blank">
                            redux-minimal
                        </a>
                    </div>
                </div>
            );
        }
    }
}

// export the connected class
function mapStateToProps(state, own_props) {
    return {
        users: state.users || [],
    }
}
export default connect(mapStateToProps)(App);