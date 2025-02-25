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

  let totalMonthDiff = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonthDiff -= start.getMonth();
  totalMonthDiff += end.getMonth();
  totalMonthDiff++; // inclusive

  const yearsDiff = Math.floor(totalMonthDiff / 12);
  const monthsDiff = totalMonthDiff - yearsDiff * 12;

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
