import { createSlice } from "@reduxjs/toolkit";
import { todoStateInterface } from "../interface/todoStateInterface";
import { todoTypeEnum } from "../type/todoType";
import {
  changeStateAction,
  addTodoAction,
  removeTodoAction
} from "../interface/reducerActionInterface";

const initialState: todoStateInterface = {
  todoList: []
};

let id: number = 1;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: addTodoAction) => {
      const { text } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: id++, text: text, type: todoTypeEnum.Wait }
        ]
      };
    },
    changeState: (state, action: changeStateAction) => {
      const { id, type } = action.payload;
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === id ? { ...todo, type: type } : todo
        )
      };
    },
    removeTodo: (state, action: removeTodoAction) => {
      const { id } = action.payload;
      console.log(id);
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== id)
      };
    }
  }
});

export const { addTodo, changeState, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
