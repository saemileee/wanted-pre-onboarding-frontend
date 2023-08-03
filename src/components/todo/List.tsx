import React, { useEffect, useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';
import Item from './Item';

function TodoList() {
  const { todos } = useTodoList();

  const [todoList, setTodoList] = useState<TodoType.Item[]>(todos);

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  const handleSetTodoList = (id: number, value: string) => {
    setTodoList((prev) => prev.map((item) => (item.id === id ? { ...item, todo: value } : item)));
  };

  return (
    <ul>
      {todoList.map((todoItem: TodoType.Item) => {
        const { id } = todoItem;
        return (
          <li key={`todo-${id}`}>
            <Item setTodoList={handleSetTodoList} item={todoItem} />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
