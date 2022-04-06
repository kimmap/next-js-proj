import TodoList from "./todoList/component/TodoList";
import TodoInput from "./todoList/component/TodoInput";

export default function App() {
  return (
    <div className="App">
      <TodoInput />
      {["wait", "doing", "done"].map((type: string) => (
        <TodoList key={type} type={type} />
      ))}
    </div>
  );
}
