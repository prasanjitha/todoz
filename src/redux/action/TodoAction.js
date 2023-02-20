export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const createTodo = todo => dispatch => {
    dispatch({
        type: CREATE_TODO,
        payload: todo
    });
};

export const updateTodo = todo => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: todo
    });
};
export const deleteTodo = todoId => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: todoId
    });
};

