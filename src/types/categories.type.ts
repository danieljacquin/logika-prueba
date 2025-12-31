export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  status: number;
  createdAt: string;
}

export interface PaginatedResponse<T> {
  data: {
    pageSize: number;
    pageNumber: number;
    totalElements: number;
    totalPages: number;
    data: T[];
  };
}

// Uso concreto de la paginación para categorías
export type CategoriesResponse = PaginatedResponse<Category>;
