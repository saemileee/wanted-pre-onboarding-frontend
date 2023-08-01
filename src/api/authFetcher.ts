import * as Api from "./api";
import * as AuthType from "../interface/Auth";
import { AxiosResponse } from "axios";

const API_KEY = "http://localhost:8000";

export async function postSingUp(formData: AuthType.Form) {
  const response: AxiosResponse = await Api.post(API_KEY, "auth/signup", formData);
  return response.status;
}

export async function postSignIn(formData: AuthType.Form) {
  const response: AxiosResponse = await Api.post(API_KEY, "auth/signin", formData);
  return response.data;
}
