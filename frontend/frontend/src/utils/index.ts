/**
 * Shared utility functions.
 */

/** Format a date string to a localized display format. */
export const formatDate = (dateStr: string, locale: string = "en"): string => {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/** Capitalize the first letter of a string. */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
