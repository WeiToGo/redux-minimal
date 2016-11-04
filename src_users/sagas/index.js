import {takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";
import {usersInit, usersAddSave, usersEditSave, usersDeleteSave} from "./users";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'USERS_INIT', usersInit),
        fork(takeLatest, 'USERS_ADD_SAVE', usersAddSave),
        fork(takeLatest, 'USERS_EDIT_SAVE', usersEditSave),
        fork(takeLatest, 'USERS_DELETE_SAVE', usersDeleteSave),
    ];
}