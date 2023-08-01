export type Type = "signIn" | "signUp";

export type Field = "email" | "password";

export interface Form {
  email: string;
  password: string;
}
