import { useDispatch } from "react-redux";
import { changeState, removeTodo } from "../reducer/todoListReducer";
import { todoTypeEnum } from "../type/todoType";

const TodoItem = (props: { id: number; text: string }) => {
  const { id, text } = props;
  const dispatch = useDispatch();

  return (
    <div>
      {text}
      <button
        onClick={() => dispatch(changeState({ id, type: todoTypeEnum.Wait }))}
      >
        w
      </button>
      <button
        onClick={() => dispatch(changeState({ id, type: todoTypeEnum.Doing }))}
      >
        d
      </button>
      <button
        onClick={() => dispatch(changeState({ id, type: todoTypeEnum.Done }))}
      >
        c
      </button>
      <button onClick={() => dispatch(removeTodo({ id }))}>r</button>
    </div>
  );
};

export default TodoItem;
