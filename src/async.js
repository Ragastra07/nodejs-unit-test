export const sayHalloAsync = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`hallo ${name}`);
            } else {
                reject(`invalid name`);
            }
        }, 2000);
    });
};