const cli = require('./helpers/cli');
const missionCommand = require('./commands/executeMissionCommand')

const martianRobots = async () => {
    const mission = await cli.getMission();
    const missionResults = missionCommand.executeMission(mission);
    cli.renderResults(missionResults);
};

martianRobots();
