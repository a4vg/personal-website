export function humanReadablePeriod(start: Date, end: Date) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  const startStr = start.toLocaleString("default", dateOptions);
  const endStr = end.toLocaleString("default", dateOptions);

  return `${startStr} - ${endStr}`;
}

export function humanReadableLength(start: Date, end: Date) {
  if (start > end) {
    throw new Error("end date should be after start date");
  }

  const monthsDiff = end.getMonth() - start.getMonth() + 1; // month inclusive
  const yearsDiff = end.getFullYear() - start.getFullYear();

  let monthsStr = "";
  if (monthsDiff > 0) {
    monthsStr = `${monthsDiff} month${monthsDiff == 1 ? "" : "s"}`;
  }
  let yearsStr = "";
  if (yearsDiff > 0) {
    yearsStr = `${yearsDiff} year${yearsDiff == 1 ? "" : "s"}`;
  }

  return `${yearsStr} ${monthsStr}`.trim();
}
