import {
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
} from "../action/TodoAction";
import { initialState } from "./UserReducers";

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case UPDATE_TODO:
            const id = action.payload.id;
            state.todos[id] = action.payload.data;
            return { ...state, todos: state.todos };
        case DELETE_TODO:
            const deleteID = action.payload;
            state.todos.splice(deleteID, 1);
            return { ...state, todos: state.todos };
        default:
            return state;
    }
}
export default todoReducer;