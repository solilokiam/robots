const missionCommand = require('./executeMissionCommand');

describe('Mission Command', () => {
    it('executes mission', () => {
        // Arrange
        const mockMissionInfo = {
            map: { width: 5, height: 5 },
            robots: [
                {
                    position: { x: 2, y: 2, orientation: 'N' },
                    instructions: ['L', 'F', 'L', 'F', 'L', 'F', 'L', 'F']
                }
            ]
        };
        const expectedResult = [[2, 2, 'N', false]];

        // Act
        const missionRessults = missionCommand.executeMission(mockMissionInfo);

        // Assert
        expect(missionRessults).toEqual(expectedResult);
    });
});
