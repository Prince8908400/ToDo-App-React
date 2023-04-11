import React, { useRef, useState } from "react";

// fontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// component
import Input from "../components/Input";

// bootstrap
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

// helper functions
import { formattedDate, makeShortText } from "../utility/helper";

const TodoItem = ({ todo, toggleTodoItem, updateTodoItem, handleShow }) => {
  
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleHideTooltip = () => {
    setShow(false);
  };

  return (
    <li key={todo?.todo_id}>
      <Input
        type="checkbox"
        id="check"
        onChange={() => toggleTodoItem(todo?.todo_id)}
        checked={todo?.completed ? true : false}
      />
      <Overlay
        rootClose={true}
        rootCloseEvent="mousedown"
        trigger="click"
        target={target.current}
        show={show}
        placement="right"
        onHide={handleHideTooltip}
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {todo?.task}
          </Tooltip>
        )}
      </Overlay>
      <p className={`task ${todo?.completed ? "completed" : ""}`}>
        {makeShortText(todo?.task)}
        {todo?.task?.length > 85 && (
          <FontAwesomeIcon
            className="info__icon"
            icon={faInfoCircle}
            ref={target}
            onClick={() => setShow(!show)}
          />
        )}
      </p>
      <p
        className={`date__box
        ${
          todo?.date
            ? Date.parse(todo?.date) < Date.now()
              ? "overdue__date"
              : "leftfordue__date"
            : ""
        }
         `}
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
