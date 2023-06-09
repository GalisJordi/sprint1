// NIVELL 2

// 1. Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

// importing functions
const { functionDouble, calculateDouble, functionSum } = require('../app/2.1');

// testing functionDouble() with Jest Fake Timers
describe('functionDouble', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    test('if num is 2 should be resolved with the double: 4', async () => {
        const result = 4;
        const funcTestDouble = functionDouble(2);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).resolves.toBe(result);
    });

    test('if num is a string should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = functionDouble('hola');
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is an array should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = functionDouble([1, 2, 3]);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is null should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = functionDouble(null);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is not defined should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = functionDouble();
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });


});

// testing calculateDouble() with Jest Fake Timers
describe(calculateDouble, () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    test('if num is 2 should be resolved with the double: 4', async () => {
        const result = 4;
        const funcTestDouble = calculateDouble(2);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).resolves.toBe(result);
    });

    test('if num is a string should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = calculateDouble('hola');
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is an array should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = calculateDouble([1, 2, 3]);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is null should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = calculateDouble(null);
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

    test('if num is not defined should throw an error', async () => {
        const error = 'The value is not a number'
        const funcTestDouble = calculateDouble();
        jest.advanceTimersByTime(2000);
        await expect(funcTestDouble).rejects.toThrowError(error);
    });

});

describe('functionSum', () => {

    test('if args are (1, 2, 3) should be resolved with the sum of their doubles (12)', async () => {
        jest.useFakeTimers();
        
        const result = 12;
        const sum = functionSum(await 1 , await 2, await 3);

        jest.runAllTimers();

        expect(sum).resolves.toBe(result);
    })

    test('if args have a string should throw an error', async () => {
        jest.useFakeTimers();
        
        const error = 'The value is not a number';
        const sum = functionSum(await 1, await 2, await 'hola');

        jest.runAllTimers();

        expect(sum).rejects.toThrowError(error);
    });

    test('if args is an array should throw an error', async () => {
        const error = 'The value is not a number'
        const sum = functionSum([1, 2, 3]);
        await expect(sum).rejects.toThrowError(error);
    });

    test('if args is null should throw an error', async () => {
        const error = 'The value is not a number'
        const sum = functionSum(null);
        await expect(sum).rejects.toThrowError(error);
    });

    test('if args is not defined should be equal to 0', async () => {
        const result = 0;
        const sum = functionSum();
        await expect(sum).resolves.toBe(result)
    });


});



