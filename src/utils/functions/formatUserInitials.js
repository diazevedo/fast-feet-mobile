export default (name) => {
  const array_name = name.split(' ', 2);
  return `${array_name[0][0]}${array_name[1][0]}`;
};
