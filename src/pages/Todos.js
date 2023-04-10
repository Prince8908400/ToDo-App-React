import React, { useEffect, useState } from "react";
import { AllTodos } from "./AllTodos";
import { toast } from "react-toastify";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const today = new Date().toISOString().substr(0, 10);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const saveData = (newTodos) => {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todos") || "[]"),
        newTodos,
      ])
    );
  };

  const saveTodo = (event) => {
    event.preventDefault();

    if (selectedTodo) {
      const updatedTodos = todos.map((todo) => {
        if (todo.todo_id === selectedTodo.todo_id) {
          return { ...selectedTodo, task, date };
        }
        return todo;
      });
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      // toast.success("Task updated successfully.");
      setSelectedTodo(null);
    } else {
      const payload = {
        todo_id: new Date().getTime(),
        task,
        completed: false,
        date,
      };
      setTodos([...todos, payload]);
      saveData(payload);
      // toast.success("Task created successfully.");
    }
    setTask("");
    setDate("");
  };

  const updateTodoItem = (todoId) => {
    const todo = todos.find((obj) => obj.todo_id === todoId);
    setSelectedTodo(todo);
    setTask(todo.task);
    setDate(todo.date);
  };

  const deleteTodoItem = (todoId) => {
    const res = todos.filter((item) => item.todo_id !== todoId);
    setTodos(res);
    localStorage.setItem("todos", JSON.stringify(res));
    // toast.success("Task deleted successfully.");
  };

  function toggleTodoItem(taskId) {
    let updatedTodos = todos.map((task) => {
      if (task.todo_id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <>
      <form onSubmit={saveTodo}>
        <label htmlFor="todo">Task:</label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="✍️ Take a note..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="myDate">Due Date:</label>
        <input
          id="myDate"
          type="date"
          name="due_date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
          disabled={task === "" ? true : false}
        />
        <button
          style={{
            backgroundColor: "#9b59b6",
            color: "#fff",
            border: "1px solid #9b59b6",
            padding: "8px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="submit"
          disabled={task === "" ? true : false}
        >
          {selectedTodo ? (
            <img
              src={require("../assets/images/save_icon.png")}
              alt="add__icon"
              height="14px"
              width="14px"
            />
          ) : (
            <img
              src={require("../assets/images/add_icon.png")}
              alt="add__icon"
              height="14px"
              width="14px"
            />
          )}
          {selectedTodo ? "Update" : "Add"}
        </button>
      </form>
      <AllTodos
        todos={todos}
        toggleTodoItem={toggleTodoItem}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
    </>
  );
};
