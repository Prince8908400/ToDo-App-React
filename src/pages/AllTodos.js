import React from "react";

// css
import "../assets/css/todos.style.css";

// font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const AllTodos = (props) => {
  const { todos, toggleTodoItem, updateTodoItem, deleteTodoItem } = props;

  function formattedDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      <ul className="todo__list">
        {todos &&
          todos.length > 0 &&
          todos?.map((todo) => (
            <li key={todo?.todo_id}>
              <input
                type="checkbox"
                id="check"
                onChange={() => toggleTodoItem(todo?.todo_id)}
                checked={todo?.completed ? true : false}
              />
              <p className={`task ${todo?.completed ? "completed" : ""}`}>
                {todo?.task}
              </p>
              <p
                className={`date__box ${
                  Date.parse(todo?.date) < Date.now()
                    ? "overdue__date"
                    : "leftfordue__date"
                }`}
              >
                {todo?.date ? formattedDate(todo?.date) : "-"}
              </p>
              <FontAwesomeIcon
                className={`editIcon ${todo?.completed ? "disabled" : ""}`}
                icon={faEdit}
                onClick={() => updateTodoItem(todo?.todo_id)}
              />
              <FontAwesomeIcon
                className="deleteIcon"
                icon={faTrash}
                onClick={() => deleteTodoItem(todo?.todo_id)}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
