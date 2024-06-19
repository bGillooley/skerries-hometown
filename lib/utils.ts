export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-IE"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const foramtDbDateString = (
  dateStr: string,
  locale: string = "en-IE"
) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const addHours = (date: Date, hours: number) => {
  date.setHours(0, 0, 0);
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
};
