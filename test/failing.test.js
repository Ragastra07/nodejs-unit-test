import { sayHallo } from "../src/sayHallo";

test ("say hallo success", () => {
    expect(sayHallo("tara")).toBe("hallo tara")
});

test.failing("sayHallo failure", () => {
    sayHallo(null);
});