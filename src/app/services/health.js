const MS_IN_HOUR = 3600000;
const MS_IN_MINUTE = 60000;
const MS_IN_SECOND = 1000;

export const getUptime = () => {
  const up = new Date() - new Date(process.env.NEXT_PUBLIC_LAST_UPDATE);
  const hours = Math.floor(up / MS_IN_HOUR);
  const minutes = Math.floor((up - (hours * MS_IN_HOUR)) / MS_IN_MINUTE);
  const seconds = Math.floor((up - (hours * MS_IN_HOUR) - (minutes * MS_IN_MINUTE)) / MS_IN_SECOND);

  return `${hours}H ${minutes}M ${seconds}S`;
};
