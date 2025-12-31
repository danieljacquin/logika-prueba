import type { Category } from '@/types/categories.type';
import { formatDate } from '@/utils/formatDate';

const columns = [
  'Nombre de la categoria',
  'Icono de la categoria',
  'Estado',
  'Descripción',
  'Fecha de creación',
  'Acciones',
];

type CategoriesTableProps = {
  categories: Category[];
  onNext: () => void;
  onPrev: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  onGoToFirstPage: () => void;
  onGoToLastPage: () => void;
  start: number;
  end: number;
  totalElements?: number;
  onChangePageSize: (size: number) => void;
  onOpenModal: () => void;
};

const CategoriesTable = ({
  categories,
  onNext,
  onPrev,
  isFirstPage,
  isLastPage,
  onGoToFirstPage,
  onGoToLastPage,
  start,
  end,
  totalElements,
  onChangePageSize,
  onOpenModal,
}: CategoriesTableProps) => {
  return (
    <div className="flex flex-col border border-gray-300 bg-white rounded-lg shadow-sm p-4 h-full">
      <div className="flex justify-between mb-5">
        <div>
          <div>
            <input
              type="text"
              placeholder="Buscar"
              className="w-full px-3 py-2.5
         text-sm text-gray-800
         placeholder:text-gray-400
         border border-gray-300
         rounded-lg
         shadow-sm
         focus:outline-none
         focus:ring-2 focus:ring-blue-500
         focus:border-blue-500"
            />
          </div>
        </div>
        <button
          onClick={onOpenModal}
          className="text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition"
          style={{ backgroundColor: '#1E1B4D' }}
        >
          Crear Tipo de Categoria
        </button>
      </div>
      <div className="overflow-auto flex-1">
        <table className="min-w-full">
          <thead className="border-b border-gray-300 text-left whitespace-nowrap ">
            <tr>
              {columns.map((column) => (
                <th
                  className="px-5 py-2 text-left text-sm font-semibold text-gray-700 sticky top-0 z-10 bg-gray-100"
                  key={column}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 whitespace-nowrap">
            {categories.length === 0 ? (
              <tr>
                <td className="px-5 py-6 text-gray-500 text-sm">No employees found</td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr className="hover:bg-gray-50" key={cat.id}>
                  <td className="px-5 py-3 text-sm text-gray-800">{cat.name}</td>
                  <td className="px-5 py-3 text-sm text-gray-800">
                    <img className="max-h-4 max-w-4" src={cat.icon} alt="" />
                  </td>
                  <td className="px-5 py-3 text-sm">
                    <button
                      className={`px-3 py-1 rounded-full text-white font-semibold text-xs transition-colors ${
                        cat.status === 1
                          ? 'bg-[#1E1B4D] hover:bg-[#372E7A]' // Activo: tu color principal con hover
                          : 'bg-gray-400 hover:bg-gray-500' // Inactivo: gris con hover
                      }`}
                    >
                      {cat.status === 1 ? 'Activo' : 'Inactivo'}
                    </button>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-800">{cat.description}</td>
                  <td className="px-5 py-3 text-sm text-gray-800">{formatDate(cat.createdAt)}</td>
                  <td className="px-5 py-3 text-sm text-gray-800">
                    <div className="flex items-center space-x-2">
                      <img src="/edit.svg" alt="Editar" className="w-4 h-4 cursor-pointer" />
                      <img src="/delete.svg" alt="Eliminar" className="w-4 h-4 cursor-pointer" />
                      <img src="/watch.svg" alt="Ver" className="w-4 h-4 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="flex">
          <div className="flex items-center space-x-2">
            <label htmlFor="rowsPerPage" className="text-sm text-gray-600">
              resultados por pagina
            </label>
            <select
              id="rowsPerPage"
              name="rowsPerPage"
              onChange={(e) => onChangePageSize(Number(e.target.value))}
              className="block w-18 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div>
          <span className="text-sm text-gray-600">
            {start}-{end} de {totalElements}
          </span>
        </div>
        <div className="flex">
          <button
            disabled={isFirstPage}
            onClick={onGoToFirstPage}
            className="flex items-center justify-center w-9 h-9 rounded-md  hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7266 12L12.6666 11.06L9.61331 8L12.6666 4.94L11.7266 4L7.72665 8L11.7266 12Z"
                fill="#8F8D93"
              />
              <path
                d="M7.33331 12L8.27331 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33331 8L7.33331 12Z"
                fill="#8F8D93"
              />
            </svg>
          </button>

          <button
            disabled={isFirstPage}
            onClick={onPrev}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91752 1.93505L8.02752 1.05005L3.08252 6.00005L8.03252 10.95L8.91752 10.065L4.85252 6.00005L8.91752 1.93505Z"
                fill="#8F8D93"
              />
            </svg>
          </button>

          <button
            disabled={isLastPage}
            onClick={onNext}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.0575 10.115L3.9425 11L8.9425 6L3.9425 1L3.0575 1.885L7.17249 6L3.0575 10.115Z"
                fill="#8F8D93"
              />
            </svg>
          </button>
          <button
            disabled={isLastPage}
            onClick={onGoToLastPage}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.27331 4L3.33331 4.94L6.38665 8L3.33331 11.06L4.27331 12L8.27331 8L4.27331 4Z"
                fill="#8F8D93"
              />
              <path
                d="M8.66665 4L7.72665 4.94L10.78 8L7.72665 11.06L8.66665 12L12.6666 8L8.66665 4Z"
                fill="#8F8D93"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
