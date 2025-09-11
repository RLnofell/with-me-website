/**
 * Format a date to a readable string.
 *
 * @param {Date | string | number} date - Date object, ISO string, or timestamp.
 * @param {string} [locale="en-US"] - Locale for formatting (e.g., "en-US", "vi-VN").
 * @param {Object} [options] - Intl.DateTimeFormat options.
 * @returns {string} Formatted date string (e.g., "Apr 21, 2025").
 */
export function formatDate(
  date,
  locale = 'en-US',
  options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }
) {
  try {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return 'Invalid date';
    }
    return parsedDate.toLocaleDateString(locale, options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}
