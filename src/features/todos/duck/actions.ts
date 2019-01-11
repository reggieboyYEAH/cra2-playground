import { TodoModel } from './reducer';
import { Action } from "redux";

export enum actionTypes {
    TODOS_REQUEST = '@app/TODOS/REQUEST',
    TODOS_REQUEST_PENDING = '@app/TODOS/REQUEST_PENDING',
    TODOS_REQUEST_SUCCESS = '@app/TODOS/REQUEST_SUCCESS',
    TODOS_REQUEST_FAILURE = '@app/TODOS/REQUEST_FAILURE',
}

export interface ITodosRequestAction extends Action {
    todos?: TodoModel[],
    error?: string
}

export const todosRequest = (): ITodosRequestAction => ({
    type: actionTypes.TODOS_REQUEST,
});

export const todosRequestPending = (): ITodosRequestAction => ({
    type: actionTypes.TODOS_REQUEST_PENDING,
});


export const todosRequestSuccess = (todos: TodoModel[]): ITodosRequestAction => ({
    type: actionTypes.TODOS_REQUEST_SUCCESS,
    todos
});

export const todosRequestFailure = (error: string): ITodosRequestAction => ({
    type: actionTypes.TODOS_REQUEST_FAILURE,
    error
});
