type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(new Date(dateString));

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
