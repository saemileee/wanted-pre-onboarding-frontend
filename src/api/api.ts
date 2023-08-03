import axios, { AxiosResponse } from 'axios';

interface RequestParams<T> {
  endpoint: string | undefined;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: string;
  query?: string;
  data?: T; // Use a generic type for data
  requiresToken?: boolean;
  isformDataHeader?: boolean;
}

async function request<T>(params: RequestParams<T>): Promise<AxiosResponse> {
  const {
    endpoint,
    method,
    params: urlParams,
    query,
    data,
    requiresToken,
    isformDataHeader,
  } = params;

  const apiUrl = urlParams ? `${endpoint}${urlParams}${query ? `?${query}` : ''}` : endpoint;

  const headers: Record<string, string> = isformDataHeader
    ? { 'Content-Type': 'multipart/form-data' }
    : { 'Content-Type': 'application/json' };

  if (requiresToken) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  try {
    const response = await axios.request<T>({
      url: apiUrl,
      method,
      headers,
      data,
    });

    return response;
  } catch (error: any) {
    throw error.response.data;
  }
}

const get = (
  endpoint: string | undefined,
  params = '',
  requiresToken = true,
  query = '',
  isformDataHeader = false
): Promise<AxiosResponse> =>
  request({ endpoint, method: 'GET', params, requiresToken, query, isformDataHeader });

const post = (
  endpoint: string | undefined,
  params = '',
  data: any = {},
  requiresToken = true,
  isformDataHeader = false
): Promise<AxiosResponse> =>
  request({ endpoint, method: 'POST', params, data, requiresToken, isformDataHeader });

const put = (
  endpoint: string | undefined,
  params = '',
  data: any = {},
  requiresToken = true,
  isformDataHeader = false
): Promise<AxiosResponse> =>
  request({ endpoint, method: 'PUT', params, data, requiresToken, isformDataHeader });

const del = (
  endpoint: string | undefined,
  params = '',
  requiresToken = true,
  isformDataHeader = false
): Promise<AxiosResponse> =>
  request({ endpoint, method: 'DELETE', params, requiresToken, isformDataHeader });

const patch = (
  endpoint: string | undefined,
  params = '',
  data: any = {},
  requiresToken = true,
  isformDataHeader = false
): Promise<AxiosResponse> =>
  request({ endpoint, method: 'PATCH', params, data, requiresToken, isformDataHeader });

export { get, post, put, del as delete, patch };
