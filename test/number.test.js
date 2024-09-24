test("numbers", () => {
    let value = 7 + 7;
    expect(value).toBeGreaterThan(10);
    expect(value).toBeGreaterThanOrEqual(14);
    expect(value).toBeLessThan(18);
    expect(value).toBeLessThanOrEqual(14);
    expect(value).toBe(14);
})