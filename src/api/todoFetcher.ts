import * as Api from './api';
import * as TodoType from '../interface/Todo';

const API_KEY = 'http://localhost:8000';

export async function createTodo(todo: TodoType.Item) {
  const response = await Api.post(API_KEY, '/todos', todo);
  return response;
}

export async function getTodos() {
  const response = await Api.get(API_KEY, '/todos');
  return response;
}

export async function updateTodo(todo: TodoType.Item) {
  const response = await Api.put(API_KEY, '/todos', todo);
  return response;
}

export async function deleteTodo(id: number) {
  const response = await Api.delete(API_KEY, `/todos/${id}`);
  return response;
}
