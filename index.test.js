import { expect, test } from "vitest";
import { expandedForm } from "./index.js";

test("A single-digit number in expanded form is represented as a string with that digit", () => {
	expect(expandedForm(4)).toBe("4");
});

// Uncomment that, if it pass the first test
test("A two-digit number in expanded form is represented as a string with the sum of the value of the two digits", () => {
	expect(expandedForm(21)).toBe("20 + 1");
});

// Uncomment that, if it passes the above test
// test("A three-digit number in expanded form is represented as a string with the sum of the value of the three digits", () => {
// 	expect(expandedForm(367)).toBe("300 + 60 + 7");
// });

/*
  It you are at that point, now you can delete/comment the two 
  previous tests, because the next test cover those cases
*/
// Uncomment that, if it passes the previous tests
// test("A multiple-digit number in expanded form is represented as a string with the sum of each digit's value", () => {
// 	expect(expandedForm(21)).toBe("20 + 1");
// 	expect(expandedForm(367)).toBe("300 + 60 + 7");
// 	expect(expandedForm(139862)).toBe("100000 + 30000 + 9000 + 800 + 60 + 2");
// });

// Uncomment that, if it passes the earlier tests
// test("A number with zero as a digit in expanded form is represented as a string with the sum of each non-zero digit's value", () => {
// 	expect(expandedForm(10270)).toBe("10000 + 200 + 70");
// 	expect(expandedForm(6049)).toBe("6000 + 40 + 9");
// });
