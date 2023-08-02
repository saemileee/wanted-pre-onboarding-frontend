import { Dispatch, SetStateAction } from 'react';

export type Type = 'signIn' | 'signUp';

export type Field = 'email' | 'password';

export interface Form {
  email: string;
  password: string;
}

export interface Context {
  formData: Form;
  setFormData: Dispatch<SetStateAction<Form>>;
}
