beforeAll(() => {console.info("before all Outer")});
afterAll(() => {console.info("after all Outer")});
beforeEach(() => {console.info("before Each Outer")});
afterEach(() => {console.info("after Each Outer")});

test ("test outer", () =>{console.info("test outer")});

describe("inner", () =>{
    beforeEach(() => {console.info("before Each inner")});
    afterEach(() => {console.info("after Each inner")});
    test ("test inner", () =>{console.info("test inner")});
});