export const formatDateLong = (dateString: string) => {
  const timeformat = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour12: false,
  } as const;

  const options = { day: "numeric", month: "short", weekday: "short" };
  return new Date(dateString).toLocaleDateString("en-GB", timeformat);
};

export const formatDateMonth = (dateString: string) => {
  const timeformat = {
    month: "short",
    hour12: false,
  } as const;

  const options = { month: "short" };
  return new Date(dateString).toLocaleDateString("en-GB", timeformat);
};

export const formatDateDay = (dateString: string) => {
  const timeformat = {
    day: "numeric",
    hour12: false,
  } as const;

  const options = { day: "numeric " };
  return new Date(dateString).toLocaleDateString("en-GB", timeformat);
};

export const formatDateWeekDay = (dateString: string) => {
  const timeformat = {
    weekday: "long",
    hour12: false,
  } as const;

  const options = { weekday: "short" };
  return new Date(dateString).toLocaleDateString("en-GB", timeformat);
};

export const calendarDate = (dateStringInput: string) => {
  const dateString = new Date(dateStringInput);
  const year = dateString.toLocaleString("default", { year: "numeric" });
  const month = dateString.toLocaleString("defanult", { month: "2-digit" });
  const day = dateString.toLocaleString("default", { day: "2-digit" });
  return `${year}-${month}-${day}`;
};
