test("array", () => {
    const name = ["tara", "arts", "indonesia"];
    expect(name).toEqual(["tara", "arts", "indonesia"]);
    expect(name).toContain("arts");
});

test("array object", () => {
    const name = [{name:"tara"}, {do:"arts"}, {location:"indonesia"}];
    expect(name).toContainEqual({do:"arts"});
});