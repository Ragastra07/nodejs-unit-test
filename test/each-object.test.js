import { sumAll } from "../src/sum";

const table = [
    {numbers: [10, 10, 10], expected: 30},
    {numbers: [10, 10, 10, 10], expected: 40},
    {numbers: [10, 20, 30], expected: 60},
    {numbers: [10, 20, 30, 40], expected: 100},
    {numbers: [10, 20, 30, 40, 50], expected: 150},
    {numbers: [], expected: 0},

];
test.each(table)("sumAll($numbers) should be $expected", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected);
});