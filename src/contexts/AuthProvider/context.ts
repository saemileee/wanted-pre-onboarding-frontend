import { Dispatch, SetStateAction, createContext } from "react";
import * as AuthType from "../../interface/Auth";

export const AuthContext = createContext<any | null>(null);
