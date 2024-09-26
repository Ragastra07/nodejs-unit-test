import { sumAll } from "../src/sum";

const table = [
    [[10, 10, 10], 30],
    [[10, 10, 10, 10], 40],
    [[10, 20, 30], 60],
    [[10, 20, 30, 40], 100],
    [[10, 20, 30, 40, 50], 150],
    [[], 0],

];
test.each(table)("sumAll(%s) should be %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
});