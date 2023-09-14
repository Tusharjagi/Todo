import React from "react";
import Header from "./components/Header";
import AddTodo from "../src/components/AddTodo/index";
import ShowTodo from "./components/ShowTodos";

function App() {
  return (
    <>
      <Header />
      <AddTodo />
      <ShowTodo />
    </>
  );
}

export default App;
