import React from 'react';
import {connect} from 'react-redux';

// User main page component
class User extends React.Component {
    // pre-render logic
    componentWillMount() {
        this.props.dispatch({
            type: 'USERS_INIT',
        });
    }

    // render
    render() {
        <div>Index</div>
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