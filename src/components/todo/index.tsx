import React, { useEffect } from 'react';
import Create from './Create';
import TodoList from './List';
import useTodoList from '../../hooks/useTodoList';
import todoStyles from '../../styles/Todo/todo.module.scss';

function TodoForm() {
  const { getTodos } = useTodoList();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={todoStyles.formContainer}>
      <Create />
      <TodoList />
    </div>
  );
}

export default TodoForm;
