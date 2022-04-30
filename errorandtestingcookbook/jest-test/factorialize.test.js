import {
  factorialize
} from "./factorialize.js";

// test function needs two arguments
// first argument is label for test

/* The second argument is a function that includes one
or more test assertions—claims that will either be successfully proved true (a pass) or
false (a fail)*/

// expect() functions to call your code
// evaluate results with toBe()

// test("10! is 3628800", () => {
// 	expect(factorialize(10)).toBe(3628800);
// });

// describe() is grouping calls to the same function
// describe('factorialize() function tests', () => {
// 	test('0! is 1', () => {
// 		expect(factorialize(0)).toBe(1);
// 	})
// })

// writting first failing test
describe("Filter function", () => {
  test("it should filter by a seacrh term (link)", () => {
    const input = [{
        id: 1,
        url: "https://www.url1.dev"
      },
      {
        id: 2,
        url: "https://www.url2.dev"
      },
      {
        id: 3,
        url: "https://www.link3.dev"
      }
    ];

    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];

		expect(filterByTerm(input, "link")).toEqual(output);
  });
});
