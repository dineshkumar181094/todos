import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { Addtodo } from './components/addtodo'
import { useState} from 'react';
import { TodoItems } from './components/todoItems';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  
  } else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    
  }


  
  let [todos,updateTodo] = useState (initTodo);
  let submitUpdateTodo = (title,description) => {
    // alert(title,description)
    let sno = todos.length + 1
    let newTodo = {
      sno: sno,
      title: title,
      description: description
    }
    let uTodo = [...todos,newTodo]
    updateTodo(uTodo);
    localStorage.setItem("todos",JSON.stringify(uTodo));
  } 

  let deleteTodo = (t) => {
    // alert(t)

    let nTodo = todos.filter((todo) => {
      return todo !== t
    })
    updateTodo(nTodo);
    localStorage.setItem("todos",JSON.stringify(nTodo));
  }
  return (
    <>
    <Header></Header>
    <Addtodo submitUpdateTodo={submitUpdateTodo}></Addtodo>
    <TodoItems todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
