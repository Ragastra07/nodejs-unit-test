import { sum } from "../src/sum";

beforeAll(() => {
    console.info("ini beforeAll");
});

afterAll(() => {
    console.info("ini afterAll");
});

beforeEach(() => {
    console.info("ini beforeEach");
});

afterEach(() => {
    console.info("ini afterEach");
});


test ("first sum", () => {
    expect(sum(10,10)).toBe(20);
    console.info("first");
});

test ("second sum", () => {
    expect(sum(12,10)).toBe(22);
    console.info("second");
});