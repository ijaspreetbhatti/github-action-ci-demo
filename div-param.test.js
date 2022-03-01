// The operation should return the division of the numbers

const { division } = require('./division');

test.each([[21, 7, 3], [2, 5, 0.4], [8, 0, Infinity], [-15, 7, -2.14]])(
    'a / b = c', (a, b, expected) => {
        expect(division(a, b)).toBe(expected)
    }
)