import { sayHalloAsync } from "../src/async";

test ("test async function", async () =>{
    
    await expect(sayHalloAsync("tara")).resolves.toBe("hallo tara");
    await expect(sayHalloAsync()).rejects.toBe("invalid name");
});