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

export const getBalance = async (name, from) => {
    const balance = await from();
    return {
        name: name,
        balance: balance
    };
};