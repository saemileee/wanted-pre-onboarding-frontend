import React, { useState } from 'react';
import useTodoList from '../../hooks/useTodoList';
import * as TodoType from '../../interface/Todo';
import { Item, EditModeItem } from './Item';

function TodoList() {
  const [todoValue, setTodoValue] = useState('');
  const { todos } = useTodoList();
  return (
    <ul>
      {todos.map((todoItem: TodoType.Item) => (
        <div>
          {todoItem.isEditMode ? (
            <EditModeItem todoValue={todoValue} setTodoValue={setTodoValue} item={todoItem} />
          ) : (
            <Item todoValue={todoValue} setTodoValue={setTodoValue} item={todoItem} />
          )}
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
