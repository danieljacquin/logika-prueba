import { useState } from 'react';

import Modal from '@/components/ui/Modal';

import CategoriesForm from './componentes/CategoriesForm';
import CategoriesTable from './componentes/CategoriesTable';
import { useCategoryMutation } from './hooks/category.mutation';
import { useCategoriesQuery } from './hooks/category.queries';

const Categories = () => {
  const {
    data,
    error,
    goToNextPage,
    goToPreviousPage,
    pageNumber,
    goToFirstPage,
    goToLastPage,
    changePageSize,
  } = useCategoriesQuery();
  const [open, setOpen] = useState(false);
  const useCreateMutation = useCategoryMutation();
  const isFirstPage = pageNumber === 1;
  const isLastPage = data?.data.totalPages === pageNumber;

  const pageSize = data?.data?.pageSize || 10;
  const totalElements = data?.data?.totalElements || 0;

  const start = (pageNumber - 1) * pageSize + 1;
  const end = Math.min(pageNumber * pageSize, totalElements);

  const handleCloseMOdal = () => {
    setOpen(false);
  };

  const createCategory = async (dataForm: unknown) => {
    return useCreateMutation.mutateAsync(dataForm);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <CategoriesTable
        onNext={goToNextPage}
        onPrev={goToPreviousPage}
        categories={data?.data.data ?? []}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onGoToFirstPage={goToFirstPage}
        onGoToLastPage={goToLastPage}
        start={start}
        end={end}
        totalElements={totalElements}
        onChangePageSize={changePageSize}
        onOpenModal={() => setOpen(true)}
      />
      <Modal isOpen={open} size="sm" onClose={handleCloseMOdal} title="Crear Categoria">
        <CategoriesForm
          onCreateCategory={createCategory}
          onCLose={handleCloseMOdal}
          isSubmiting={useCreateMutation.isPending}
        />
      </Modal>
    </>
  );
};

export default Categories;
