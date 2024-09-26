import { callMe  } from "../src/exception.js";

test("exception", () => {
    expect(() => (callMe("tara"))).toThrow();
});

test("exception error", () => {
    expect(() => (callMe("taras"))).toBe("OK");
});