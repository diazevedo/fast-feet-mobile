import { format, parseISO } from 'date-fns';

const formatDate = (date) => {
  if (!date) {
    return '-- / -- / --';
  }
  return format(parseISO(date), 'dd / MM / yyyy');
};

export default formatDate;
