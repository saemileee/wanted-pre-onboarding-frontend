import * as Api from './api';
import * as AuthType from '../interface/Auth';

const API_KEY = 'http://localhost:8000';

export async function postSignUp(formData: AuthType.Form) {
  const response = await Api.post(API_KEY, '/auth/signup', formData);
  return response;
}

export async function postSignIn(formData: AuthType.Form) {
  const response = await Api.post(API_KEY, '/auth/signin', formData);
  return response;
}
