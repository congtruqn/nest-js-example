export interface PaginationResponse<T> {
  results: T[];
  offset: number;
  limit: number;
  totalItems: number;
}
