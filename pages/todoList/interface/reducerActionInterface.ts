import { todoType } from "../type/todoType";

interface action {
  type: string;
}

export interface addTodoAction extends action {
  payload: {
    text: string;
  };
}

export interface changeStateAction extends action {
  payload: {
    id: number;
    type: todoType;
  };
}

export interface removeTodoAction extends action {
  payload: {
    id: number;
  };
}
