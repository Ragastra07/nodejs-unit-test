import { sum } from "../src/sum";

test("testing sum function", () => {
    const result = sum(10, 7);

    expect(result).toBe(17);
})