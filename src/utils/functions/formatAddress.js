export default ({
  number,
  street,
  address_complement = '',
  city,
  state,
  post_code,
}) => {
  return `${address_complement} / ${number} ${street}, ${post_code}, ${city},  ${state}`;
};
