import { ApiError } from '../../interfaces/error';

export interface FailedApiResponse {
  error: ApiError;
  data: undefined;
}

export interface SuccessfulApiResponse<T> {
  data: T;
  error: undefined;
}

export type ApiResponse<T> = SuccessfulApiResponse<T> | FailedApiResponse;
