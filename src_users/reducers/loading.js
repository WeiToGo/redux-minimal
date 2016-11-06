// loading reducer
export default function suggest(state = false, action) {
    switch (action.type) {
        case 'LOADING_ENABLE':
            return true;
        case 'LOADING_DISABLE':
            return false;
        default:
            return state;
    }
}