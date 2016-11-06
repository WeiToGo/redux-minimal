import APICommon from './common';

// API Users static class
export default class ApiUsers {
    // login
    static login(action) {
        return APICommon.call('?action=login', 'POST', {
            username: action.username,
            password: action.password,
        }).then(data => {
            return {
                jwt_token: data.result,
                error: data.error,
            }
        });
    }

    // reset all users
    static reset(action) {
        return APICommon.call('?action=reset', 'GET').then(data => {
            return {
                success: data.success,
                error: data.error,
            };
        });
    }

    // get a list of users
    static getList(action) {
        return APICommon.call('?action=list').then(data => {
            return {
                result: data.result,
                error: data.error,
            }
        });
    }

    // add a user
    static add(action) {
        // call some api url
    }

    // edit a user
    static edit(action) {
        // call some api url
    }

    // delete a user
    static delete(action) {
        // call some api url
    }
}