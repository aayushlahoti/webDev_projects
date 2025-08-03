
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  const onRemove = (todo) =>{
    setTodos(todos.filter((t) => t !== todo))
  }
  const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "Go to the market",
    desc: "You need to go to the market to buy vegetables"
  },
  {
    sno: 2,
    title: "Go to the gym",
    desc: "You need to go to the gym to stay fit"
  }
]);
const addTodo = (title, desc) => {
  setTodos([
    ...todos,
    {
      sno: todos.length + 1,
      title: title,
      desc: desc
    }
  ]);
};
  return (
    <>
    <Header title="DonkeyWork" searchBar={true} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos= {todos} onRemove={onRemove} />
    <Footer />
    </>
  );
}

export default App;
