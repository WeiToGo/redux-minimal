import cache from "memory-cache";
import "whatwg-fetch";

// common API class used for convenience
export default class APICommon {
    // call an API url
    static call(path, method, params, caching) {
        // api options
        const endpoint = 'http://redux-minimal-app.catalin-luntraru.com/api/' + path;
        const options = {
            method: method || 'GET',
            headers: {'Content-Type': 'application/json'},
            body: params ? JSON.stringify(params) : null,
        };

        // add the jwt_token in the header
        const token = localStorage.getItem('jwt_token');
        if (token) {
            options.headers['Authorization'] = 'Bearer ' + token;
        }

        // caching options
        caching = {
            enabled: true,
            time: 5 * 60 * 1000,    // 5 minutes cache
            key: endpoint,
            ...caching        // overwrite the options with the parameters
        };

        // check if we have the cached result
        let result;
        if ('GET' === method && caching.enabled) {
            result = cache.get(caching.key);
            if (null !== result) {console.log('cached results');
                return Promise.resolve(result);
            }
        }

        // call fetch
        return fetch(endpoint, options).then(response => {console.log(response);
            if (!response.ok) {
                return {error: 'Fetch failed'};
            }
            return response.json().then(json => {console.log(json);
                // api error
                if (!json.success) {
                    return {error: json.error};
                }

                // cache the result
                if ('GET' === method && caching.enabled) {
                    cache.put(caching.key, json), caching.time;
                }

                // return
                return json;
            }).catch(function(error) {
                return {error: error.message};
            });
        }).catch(function(error) {
            return {error: error.message};
        });
    }
}