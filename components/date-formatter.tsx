type Props = {
  dateString: string;
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
};

const DateFormatter = ({ dateString, dateStyle = 'medium' }: Props) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle,
  }).format(new Date(dateString));

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
