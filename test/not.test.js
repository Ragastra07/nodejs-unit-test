test("string", () => {
    const name = "tara arts indonesia";

    expect(name).not.toBe("ca tara arts indonesia");
    expect(name).not.toEqual("fa tara arts indonesia");
    expect(name).not.toMatch(/aer/);
});


test("numbers", () => {
    let value = 7 + 7;
    expect(value).not.toBeGreaterThan(53);
    expect(value).not.toBeGreaterThanOrEqual(22);
    expect(value).not.toBeLessThan(4);
    expect(value).not.toBeLessThanOrEqual(3);
    expect(value).not.toBe(12);
})