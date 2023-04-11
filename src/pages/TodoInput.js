import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const TodoInput = ({
  task,
  setTask,
  date,
  setDate,
  inputRef,
  today,
  selectedTodo,
  saveTodo,
}) => {
  return (
    <form onSubmit={saveTodo} autoComplete="off">
      <div className="input_lbls">
        <label htmlFor="task">Task:</label>
        <label htmlFor="dateInput" className="datelabel">
          Due date:
        </label>
      </div>
      <label htmlFor="task" className="smtask">
        Task:
      </label>
      <Input
        id="task"
        type="search"
        name="task"
        className="user__request"
        placeholder="✍️ Take a note..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
      <label htmlFor="dateInput" className="smdate">
        Due date:
      </label>
      <Input
        id="dateInput"
        type="date"
        name="due_date"
        value={date}
        min={today}
        onChange={(e) => setDate(e.target.value)}
        disabled={task === "" ? true : false}
      />
      <Button
        className="form__button"
        type="submit"
        disabled={task === "" ? true : false}
      >
        {selectedTodo ? (
          <img
            src={require("../assets/images/save_icon.png")}
            alt="add__icon"
            height="16px"
            width="16px"
          />
        ) : (
          <img
            src={require("../assets/images/add_icon.png")}
            alt="add__icon"
            height="14px"
            width="14px"
          />
        )}
        {selectedTodo ? "Save" : "Add"}
      </Button>
    </form>
  );
};

export default TodoInput;
