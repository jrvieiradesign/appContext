import React from 'react';

// import { Container } from './styles';

function TodoListItem({ todo }) {
  
  return (
    <div>
        {todo.id} - {todo.title} - {todo.done? "true" : "false"}
    </div>
  );
}

export default TodoListItem;