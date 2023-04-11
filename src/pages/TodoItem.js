import React from "react";

// fontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// component
import Input from "../components/Input";

const TodoItem = ({ todo, toggleTodoItem, updateTodoItem, handleShow }) => {
  const formattedDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <li key={todo?.todo_id}>
      <Input
        type="checkbox"
        id="check"
        onChange={() => toggleTodoItem(todo?.todo_id)}
        checked={todo?.completed ? true : false}
      />
      <p className={`task truncate ${todo?.completed ? "completed" : ""}`}>
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
        onClick={() => handleShow(todo?.todo_id)}
      />
    </li>
  );
};

export default TodoItem;
