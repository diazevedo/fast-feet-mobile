export default ({ canceled_at, end_date, start_date }) => {
  if (canceled_at) {
    return 'cancelled';
  }
  if (end_date) {
    return 'delivered';
  }

  if (start_date) {
    return 'in transit';
  }

  return 'ready to pick up';
};
