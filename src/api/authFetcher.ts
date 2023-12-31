import * as Api from './api';
import * as AuthType from '../interface/Auth';
import API_KEY from '../constants/apiKey';

export async function postSignUp(formData: AuthType.FormRequest) {
  const response = await Api.post(API_KEY, '/auth/signup', formData);
  return response;
}

export async function postSignIn(formData: AuthType.FormRequest) {
  const response = await Api.post(API_KEY, '/auth/signin', formData);
  return response;
}
