/**
 * Get the expanded form of a number.
 *
 * @param {number} num - The number to expand.
 * @returns {string} The expanded form of the input number.
 *
 * @example
 * expandedForm(34); // returns '30 + 4'
 *
 * @example
 * expandedForm(102); // returns '100 + 2'
 */
export function expandedForm(num) {
	const BASE = 10;
	const INITIAL_MULTIPLIER = 1;
	const INITIAL_EXPANDED_FORM = "";
	const head = (num) => Math.floor(num / BASE);
	const tail = (num) => num % BASE;
	const nextMultiplier = (multiplier) => multiplier * BASE;
	const join = (value, string) => (value ? `${value}${string && ` + ${string}`}` : string);

	return (function expandedForm$(num, multiplier = INITIAL_MULTIPLIER, prevExpanded = INITIAL_EXPANDED_FORM) {
		return (
			(num < BASE && join(num * multiplier, prevExpanded)) ||
			expandedForm$(head(num), nextMultiplier(multiplier), join(tail(num) * multiplier, prevExpanded))
		);
	})(num);
}
