import React, { useEffect, useState, useRef } from "react";

// components
import { AllTodos } from "./AllTodos";
import TodoInput from "./TodoInput";
import CustomModal from "../components/CustomModal";

// toast
import { toast } from "react-toastify";

// css
import "../assets/css/form.style.css";

export const Todos = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const today = new Date().toISOString().substr(0, 10);
  const [todoId, setTodoId] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    setTodoId("");
  };

  const handleShow = (todoId) => {
    setShow(true);
    setTodoId(todoId);
  };

  const saveData = (newTodos) => {
    const existingTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    const updatedTodos = [...existingTodos, newTodos];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const resetState = () => {
    setTask("");
    setDate("");
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
      toast.success("Task updated successfully.");
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
      toast.success("Task created successfully.");
    }
    resetState();
  };

  const updateTodoItem = (todoId) => {
    const todo = todos.find((obj) => obj.todo_id === todoId);
    setSelectedTodo(todo);
    setTask(todo.task);
    setDate(todo.date);
  };

  const deleteTodoItem = () => {
    const res = todos.filter((item) => item.todo_id !== todoId);
    setTodos(res);
    localStorage.setItem("todos", JSON.stringify(res));
    handleClose();
    toast.success("Task deleted successfully.");
  };

  const modalActions = [
    { label: "Close", variant: "secondary", onClick: handleClose },
    { label: "Delete", variant: "danger", onClick: deleteTodoItem },
  ];

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
      <TodoInput
        task={task}
        setTask={setTask}
        date={date}
        setDate={setDate}
        inputRef={inputRef}
        today={today}
        selectedTodo={selectedTodo}
        saveTodo={saveTodo}
      />
      <CustomModal
        show={show}
        handleClose={handleClose}
        title="Are you sure?"
        body="Do you really want to delete these records? This process cannot be undone."
        actions={modalActions}
      />
      <AllTodos
        todos={todos}
        handleShow={handleShow}
        toggleTodoItem={toggleTodoItem}
        updateTodoItem={updateTodoItem}
      />
    </>
  );
};
