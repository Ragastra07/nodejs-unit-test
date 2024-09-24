export class myException extends Error{}

export const callMe =  (name) => {
    if (name === "tara") {
        throw new myException("adios amigos el error");
    } else {
        return "OK";
    }
};