export const formatDate = (dateString: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);

  // Array de meses abreviados
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

// Para input tipo date
export const formatDateForInput = (date: string | Date) => {
  return new Date(date).toISOString().split('T')[0];
};
