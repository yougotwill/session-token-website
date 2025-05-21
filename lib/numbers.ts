import { omit } from 'lodash';

/**
 * Formats a number as a string using English locale.
 * If the value is not a finite number, it returns the value as a string.
 *
 * @param value - The number to format.
 * @param options - An optional object containing formatting options
 */
export function formatNumberToLocaleString(
  value: number,
  options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
): string {
  if (!Number.isFinite(value)) {
    return value.toString();
  }

  return new Intl.NumberFormat('en', omit(options, 'locale')).format(value);
}

// Refactored from
// https://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k

const abbreviations: Array<[string, string]> = [
  ['k', 'thousand'],
  ['m', 'million'],
  ['b', 'billion'],
  ['t', 'trillion'],
];

export function condenseNumberWithUnits({
  number,
  decimals = 2,
  shorthand = true,
}: {
  number: number;
  decimals: number;
  shorthand: boolean;
}): [string, string] {
  let result: [string, string] = [String(number), ''];
  const d = 10 ** decimals;
  const unitIndex = shorthand ? 0 : 1;

  // Go through the array backwards, so we do the largest first
  for (let i = abbreviations.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = 10 ** ((i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decimals, round, and then divide by decimals.
      // This gives us nice rounding to a particular decimal place.
      let n = Math.round((number * d) / size) / d;

      // Handle special case where we round up to the next abbreviation
      if (n === 1000 && i < abbreviations.length - 1) {
        n = 1;
        i++;
      }

      const unit = abbreviations[i]![unitIndex];
      result = [String(n), unit];
      break;
    }
  }

  return result;
}
