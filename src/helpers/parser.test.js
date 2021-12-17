const parser = require('./parser');

describe('parser', () => {
    it('parrses input',() => {
        const input = '5 3\n1 1 E\nRFRFRFRF\n\n2 2 E\nLFLFLFLF';

        const expectedOutput = {
            map: { width: 5, height: 3 },
            robots: [
                {
                    position: { x: 1, y: 1, orientation: 'E' },
                    instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
                },
                {
                    position: { x: 2, y: 2, orientation: 'E' },
                    instructions: ['L', 'F', 'L', 'F', 'L', 'F', 'L', 'F']
                }
            ]
        };

        const result = parser.parseInstructions(input);

        expect(result).toEqual(expectedOutput);
    })
})
