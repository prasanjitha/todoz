import {
    SUBMIT_DATA,
    LOGIN_DATA,
    IS_LOADING,
} from "../action/UserAction";

export const initialState = {
    isLoading: false,
    userData: [],
    loginData: [],
    todos: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SUBMIT_DATA:
            return { ...state, userData: action.payload };
        case LOGIN_DATA:
            return { ...state, loginData: action.payload };
        default:
            return state;
    }
}
export default userReducer;