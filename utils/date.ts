import { DateTime } from "luxon";

export function convertDate(date: string): DateTime {
    return DateTime.fromISO(date);
  }