import DayJs from 'dayjs';

const formatDate = (date: string) => {
  const dateToFormat = new Date(date);
  return DayJs(dateToFormat).format('DD MMM YYYY');
};

export default formatDate;
