import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  //(event: React.MouseEvent) => void; 인수를 별도로 표기해줘도 됨
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
