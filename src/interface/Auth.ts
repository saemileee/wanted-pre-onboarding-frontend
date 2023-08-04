import { Dispatch, SetStateAction } from 'react';

export type Type = 'signIn' | 'signUp';

export type Field = 'email' | 'password';

export interface FormRequest {
  email: string;
  password: string;
}

export interface Form {
  email: { value: string; isValid: boolean };
  password: { value: string; isValid: boolean };
}

export interface Context {
  formData: Form;
  setFormData: Dispatch<SetStateAction<Form>>;
}
