import { callMe  } from "../src/exception.js";

test("exception", () => {
    expect(() => (callMe("tara"))).toThrow();
});