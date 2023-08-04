import * as Api from './api';
import * as TodoType from '../interface/Todo';
import API_KEY from '../constants/apiKey';

export async function getTodos() {
  const response = await Api.get(API_KEY, '/todos', true);
  return response;
}

export async function createTodo(todo: { todo: string }) {
  const response = await Api.post(API_KEY, '/todos', todo, true);
  return response;
}

export async function updateTodo(id: number, todo: TodoType.UpdatedTodo) {
  const response = await Api.put(API_KEY, `/todos/${id}`, todo, true);
  return response;
}

export async function deleteTodo(id: number) {
  const response = await Api.delete(API_KEY, `/todos/${id}`, true);
  return response;
}
