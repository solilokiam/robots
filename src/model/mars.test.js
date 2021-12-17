const Mars = require('./mars');

describe('Mars', () => {
    it('checks if position is out of boundaries', () => {
        const mars = new Mars({width: 2, height: 2});

        expect(mars.isOutOfBoundaries({x: 0, y: 0})).toBe(false);
        expect(mars.isOutOfBoundaries({x: 0, y: 1})).toBe(false);
        expect(mars.isOutOfBoundaries({x: 0, y: 2})).toBe(false);
        expect(mars.isOutOfBoundaries({x: 0, y: 3})).toBe(true);
        expect(mars.isOutOfBoundaries({x: 0, y: -1})).toBe(true);

        expect(mars.isOutOfBoundaries({x: 0, y: 1})).toBe(false);
        expect(mars.isOutOfBoundaries({x: 1, y: 1})).toBe(false);
        expect(mars.isOutOfBoundaries({x: 3, y: 1})).toBe(true);
        expect(mars.isOutOfBoundaries({x: -1, y: 1})).toBe(true);
    });

    it('checks leave scent', () => {
        const mars = new Mars({width: 2, height: 2});
        mars.leaveScent({x: 10, y: 10});
        mars.leaveScent({x: 5, y: 5});

        expect(mars.scentExists({x: 10, y: 10})).toBe(true);
        expect(mars.scentExists({x: 0, y: 10})).toBe(false);
        expect(mars.scentExists({x: 5, y: 5})).toBe(true);
    })
})
