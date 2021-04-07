import React, { useContext, useState } from 'react';
import { TodoContext } from "../contexts/TodoContext";
// import { Container } from './styles';

function Addtodo() {
  const { saveTodo } = useContext(TodoContext);

  const [todo, setTodo ] = useState();
  
  const handleFormSubmit = e => {
    e.preventDefault();
    saveTodo(todo);
  }
  
  const handleInputChange = e => {
      setTodo({
        ...todo,
        title: e.target.value,
      })
  }
  return (
  
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="Nova Tarefa..." onChange={handleInputChange}/>
      <button>Salvar</button>
    </form>

    );
}

export default Addtodo;