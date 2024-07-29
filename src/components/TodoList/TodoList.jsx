import React, { useState } from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    let todo = todos.filter((item) => item.id === id);
    setTodo(todo[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="todoList">
      <div className="todolist_box">
        <h1>Todo App</h1>
        <div className="todolist_content">
          <div className="addNewList">
            <input
              type="text"
              onChange={handleChange}
              value={todo}
              placeholder="Add your new Todo"
            />
            <input
              type="button"
              value="+"
              disabled={todo.length <= 3}
              onClick={handleAdd}
            />
          </div>
          <div
            className="toggleFinished"
            style={{ fontSize: "12px", marginTop: "10px" }}
          >
            <input
              type="checkbox"
              onChange={toggleFinished}
              checked={showFinished}
              style={{ marginRight: "5px" }}
            />
            Show Finished
          </div>
          <div className="todos">
            <h2 style={{marginTop: "5px"}}>Your Todos</h2>
            {todos.length === 0 && (
              <p style={{ marginTop: "10px" }}>There are no todos!</p>
            )}
            {todos.map((item, index) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div className="todolists" key={index}>
                    <input
                      name={item.id}
                      type="checkbox"
                      onChange={handleCheckBox}
                      checked={item.isCompleted}
                    />
                    <div className="text">
                      <p
                        style={{
                          textDecoration: item.isCompleted
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {item.todo}
                      </p>
                    </div>
                    <div className="buttons">
                      <button onClick={(e) => handleEdit(e, item.id)}>
                        Edit
                      </button>
                      <button onClick={(e) => handleDelete(e, item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
