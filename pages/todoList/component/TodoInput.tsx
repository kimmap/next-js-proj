import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/todoListReducer";
import { useState } from "react";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodoBtn = () => {
    dispatch(addTodo({ text }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoBtn}>추가</button>
    </div>
  );
};

export default TodoInput;
