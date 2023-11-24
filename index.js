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
	const head = (num) => Math.floor(num / BASE);
	const tail = (num) => num % BASE;
	if (num >= BASE) return `${head(num) * BASE} + ${tail(num)}`;
	return `${num}`;
}
