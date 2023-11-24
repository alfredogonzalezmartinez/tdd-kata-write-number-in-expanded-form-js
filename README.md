# Write Number in Expanded Form

This is a template to resolve [Codewars](https://www.codewars.com/) kata "[Write Number in Expanded Form](https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript)" in JavaScript applying [TDD (Test Driven Development)](https://www.browserstack.com/guide/what-is-test-driven-development).

## Kata description

You will be given a number and you will need to return it as a string in Expanded Form. 

For example:

```js
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
```

NOTE: All numbers will be whole numbers greater than 0.

## Requisites

- [Node >=v14.18.0](https://nodejs.org/)

## Instructions

1. Install dependencies

   ```bash
   npm i
   ```

   NOTE: [biomejs](https://biomejs.dev/) is available as formatter and linter. You can launch it run it `npm run check` or install the [editor extension](https://biomejs.dev/guides/integrate-in-editor).

2. Launch the test runner.

   ```bash
   npm test
   ```

   NOTE: Make sure to keep the terminal in view to check the test status

3. Check the first test of [index.test.js](index.test.js).

4. Implement in [index.js](index.js) the minimum solution to pass test.

5. Uncomment next test.

6. Implement again the minimum solution to pass test.
   
   Note: After pass the test, you can refactor the code to improve it, for example, its readability.

7. Continue uncommenting the following tests and implementing the solution.
