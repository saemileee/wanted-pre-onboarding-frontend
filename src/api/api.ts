import axios from "axios";

interface RequestParams<T> {
  endpoint: string | undefined;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: string;
  query?: string;
  data?: any;
  requiresToken?: boolean;
  isformDataHeader?: boolean;
}

async function request<T>({
  endpoint,
  method,
  params = "",
  query = "",
  data,
  requiresToken = true,

  isformDataHeader = false,
}: RequestParams<T>): Promise<T> {
  const apiUrl = params ? `${endpoint}/${params}${query ? `?${query}` : ""}` : endpoint;
  const headers: { [key: string]: string } = isformDataHeader
    ? {
        "Content-Type": "multipart/form-data",
      }
    : {
        "Content-Type": "application/json",
      };

  // requiresToken && (headers.Authorization = `Bearer ${Token.getToken() ? Token.getToken() : ""}`);

  try {
    const response = await axios.request<T>({
      url: apiUrl,
      method,
      headers,
      data,
    });

    return response.data;
  } catch (error: any) {
    throw new Error("요청이 실패하였습니다.");
  }
}

const get = <T>(
  endpoint: string | undefined,
  params = "",
  requiresToken = true,
  query = "",
  isformDataHeader = false
): Promise<T> =>
  request<T>({ endpoint, method: "GET", params, requiresToken, query, isformDataHeader });

const post = <T>(
  endpoint: string | undefined,
  params = "",
  data: any,
  requiresToken = true,
  isformDataHeader = false
): Promise<T> =>
  request<T>({ endpoint, method: "POST", params, data, requiresToken, isformDataHeader });

const put = <T>(
  endpoint: string | undefined,
  params = "",
  data: any,
  requiresToken = true,
  isformDataHeader = false
): Promise<T> =>
  request<T>({ endpoint, method: "PUT", params, data, requiresToken, isformDataHeader });

const del = <T>(
  endpoint: string | undefined,
  params = "",
  data: any = {},
  requiresToken = true,
  isformDataHeader = false
): Promise<T> =>
  request<T>({ endpoint, method: "DELETE", params, data, requiresToken, isformDataHeader });

const patch = <T>(
  endpoint: string | undefined,
  params = "",
  data: any,
  requiresToken = true,
  isformDataHeader = false
): Promise<T> =>
  request<T>({ endpoint, method: "PATCH", params, data, requiresToken, isformDataHeader });

export { get, post, put, del as delete, patch };
