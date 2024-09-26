import { calculate, calculateAndRetrun } from "../src/sum";

test ("test calculate", () => {
    const callback = jest.fn();

    calculate([1, 2, 3], callback);
    calculate([1, 2, 3, 7, 9], callback);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(6);
    expect(callback.mock.calls[1][0]).toBe(22);

    console.info(callback.mock.calls);
});

test ("test mock retrun value", () => {
    const callback = jest.fn()
    callback.mockReturnValueOnce(6);
    callback.mockReturnValueOnce(22);

    expect(calculateAndRetrun([1, 2, 3], callback)).toBe(6);
    expect(calculateAndRetrun([1, 2, 3, 7, 9], callback)).toBe(22);

    expect(callback.mock.results[0].value).toBe(6);
    expect(callback.mock.results[1].value).toBe(22);
});

test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateAndRetrun([10, 10, 10], callback)).toBe(60);
    expect(calculateAndRetrun([10, 10, 10, 10, 10], callback)).toBe(100);

    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(100);
});