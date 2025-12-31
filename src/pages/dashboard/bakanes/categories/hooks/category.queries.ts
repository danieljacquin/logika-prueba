import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getAll } from '../api/category.api';

export const useCategoriesQuery = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const { data, error, isLoading } = useQuery({
    queryKey: ['categories', { pageNumber, pageSize }],
    queryFn: ({ signal }) => getAll(signal, pageNumber, pageSize),
    staleTime: 5 * 60 * 1000, // 5 minutes
    placeholderData: keepPreviousData,
  });

  const goToPreviousPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const goToLastPage = () => {
    if (data?.data.totalPages) {
      setPageNumber(data.data.totalPages);
    }
  };

  const goToFirstPage = () => {
    setPageNumber(1);
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    setPageNumber(1); // opcional: reiniciar a la primera página
  };

  return {
    data,
    error,
    isLoading,
    pageNumber,
    goToPreviousPage,
    goToNextPage,
    changePageSize,
    goToFirstPage,
    goToLastPage,
  };
};
