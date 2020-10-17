const options = {
  year: 'numeric',
  month: 'long',
};
export default (value: number | string) => {
  const now = new Date(value);
  return now.toLocaleString(undefined, options);
};
