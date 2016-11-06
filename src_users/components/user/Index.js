import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {Table, Pagination} from "react-bootstrap";
import UserListElement from "./UserListElement";
import UserDelete from "./UserDelete";

// User list component
export class User extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        // bind <this>
        this.changePage = this.changePage.bind(this);
    }

    // render
    render() {
        const {users, loading, page} = this.props;
        const pages = Math.ceil(users.total / 10);

        // render loading
        if (!total_users) {
            return (
                <div className="loading">
                    <ProgressBar active now={100}/>
                </div>
            );
        }

        // render
        return (
            <div className="page-users">
                <Table bordered hover responsive striped className={loading ? 'container-loading' : ''}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Job</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.list.map((user, index) => {
                        return (
                            <UserListElement key={index} user={user}/>
                        );
                    })}
                    </tbody>
                </Table>

                <Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                            prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

                <UserDelete/>
            </div>
        );
    }

    // change the user lists' current page
    changePage(page) {
        const {dispatch} = this.props;
        dispatch({type: 'LOADING_ENABLE'});
        dispatch(push('/?page=' + page));
    }
}

// export the connected class
function mapStateToProps(state, own_props) {
    return {
        users: state.users || {},
        loading: state.loading || false,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
    };
}
export default connect(mapStateToProps)(User);