export const sayHallo = (name) => {
    if (name) {
        return `hallo ${name}`;
    } else {
        throw new Error("name is required");
    }
};