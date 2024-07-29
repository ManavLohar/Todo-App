import React from "react";
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;