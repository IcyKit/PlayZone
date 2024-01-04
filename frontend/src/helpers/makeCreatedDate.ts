const makeCreatedDate = (created: Date) => {
  const now = new Date();
  const createdAt = new Date(created);

  const differenceMs: number = Math.abs(now.getTime() - createdAt.getTime());
  const differenceDay: number = Math.floor(
    differenceMs / (1000 * 60 * 60 * 24)
  );
  const time = createdAt.toLocaleTimeString("ru-RU").slice(0, -3);

  if (differenceDay === 0) {
    return `Cегодня, ${time}`;
  } else if (differenceDay === 1) {
    return `Вчера, ${time}`;
  }
  return createdAt.toLocaleString("ru-RU").slice(0, -3);
};

export default makeCreatedDate;
