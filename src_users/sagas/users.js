import {call, put} from "redux-saga/effects";
import ApiUsers from "../api/users";

// init the users for the app
export function* usersInit(action) {
    // authenticate
    const auth = yield call(ApiUsers.login, {
        username: 'admin',
        password: 'pass',
    });
    if (!auth.jwt_token) {
        // normally this would be placed in a form with error checking, but for simplicity we will use it here
        console.log(auth.error);
        return;
    }

    // save the token
    localStorage.setItem('jwt_token', auth.jwt_token);

    // reset the users in the db so we have a proper list of values
    // this might cause some inconsistencies when more than one person is using the api
    const reset = yield call(ApiUsers.reset);
    if (reset.error) {
        console.log(reset.error);
    }

    // get the users list
    const users = yield call(ApiUsers.getList);

    // save the users in the state
    yield put({
        type: 'USERS_LIST_SAVE',
        users: users.result,
    });
}

// add a user
export function* usersAddSave(action) {
    yield call(ApiUsers.add, action);
}

// edit a user
export function* usersEditSave(action) {
    yield call(ApiUsers.edit, action);
}

// delete a user
export function* usersDeleteSave(action) {
    yield call(ApiUsers.delete, action);
}