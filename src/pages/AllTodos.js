import React from "react";

// css
import "../assets/css/todos.style.css";
import TodoItem from "./TodoItem";

export const AllTodos = (props) => {
  const { todos, toggleTodoItem, updateTodoItem, handleShow } = props;

  return (
    <>
      <ul className="todo__list">
        {todos.length > 0 &&
          todos?.map((todo) => (
            <TodoItem
              key={todo.todo_id}
              todo={todo}
              toggleTodoItem={toggleTodoItem}
              updateTodoItem={updateTodoItem}
              handleShow={handleShow}
            />
          ))}
      </ul>
    </>
  );
};
