function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
}

describe('Division function', () => {
    test('should divide two numbers correctly', () => {
        expect(divide(8, 2)).toBe(4);
    });
    test('should throw an error when divided by zero', () => {
        expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
});
