export default (value: number | string): string => {
  const now = new Date(value);
  return now.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
  });
};
