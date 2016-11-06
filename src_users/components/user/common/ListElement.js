import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {Button, Glyphicon} from "react-bootstrap";

// User List Element component
export class UserListElement extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        // bind <this>
        this.promptDeleteShow = this.promptDeleteShow.bind(this);
    }

    // prop checks
    static get propTypes() {
        return {
            user: React.PropTypes.object.isRequired,
        };
    }

    // render
    render() {
        const {user} = this.props;
        return (
            <tr>
                <td>#{user.user_id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <Link to={'user-edit/' + user.user_id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button bsSize="xsmall" className="user-delete" data-id={user.user_id} data-username={user.username}
                            onClick={this.promptDeleteShow}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }

    // prompt to delete the user
    promptDeleteShow(event) {
        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;
        this.props.dispatch({
            type: 'PROMPT_DELETE_SHOW',
            id: user_id,
            username: username,
        });
    }
}

// export the connected class
function mapStateToProps(state, own_props) {
    return {
        user: own_props.user,
    }
}
export default connect(mapStateToProps)(UserListElement);