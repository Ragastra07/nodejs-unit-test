test("string", () => {
    const name = "tara arts indonesia";

    expect(name).toBe("tara arts indonesia");
    expect(name).toEqual("tara arts indonesia");
    expect(name).toMatch(/ar/);
});