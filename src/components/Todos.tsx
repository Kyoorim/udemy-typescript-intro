import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos.context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // Todos.tsx에서 bind()로 인수처리 해줌으로써 TodoItem에서 또 인수처리를 해줄 필요가 없게 되었음
        />
      ))}
    </ul>
  );
};

export default Todos;
