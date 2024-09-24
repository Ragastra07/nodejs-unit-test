test("test to be", () => {
    const name = "tara";
    const hallo = `hello ${name}`;

    expect(hallo).toBe("hello tara");
});


test("test to equal", () => {
    let person = {id: "taras"};
    Object.assign(person, {name: "yuri"});

    expect(person).toEqual({id: "taras", name: "yuri"});
});