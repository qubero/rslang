export const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatDate = (d: Date) => {
  return [d.getDate(), d.getMonth() + 1, d.getFullYear() % 100]
    .map((el) => String(el).padStart(2, '0'))
    .join('.');
};
