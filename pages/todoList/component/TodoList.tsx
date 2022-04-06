import { useSelector } from "react-redux";
import { RootState } from "../../common/store/store";
import TodoItem from "./TodoItem";

const TodoList = (props: { type: string }) => {
  const { type } = props;
  const todos = useSelector((state: RootState) => state.todo.todoList);

  return (
    <div className="container">
      <div>{type}</div>
      <div>
        {todos
          .filter((item) => item.type === type)
          .map((item) => (
            <TodoItem key={item.id} id={item.id} text={item.text} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
