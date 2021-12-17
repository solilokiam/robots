const Mars = require('../model/mars');
const Robot = require('../model/robot');

const executeMission = missionInfo => {
    const mars = new Mars(missionInfo.map);

    const resultRobots = missionInfo.robots.map(robotInput => {
        const robot = new Robot(robotInput.position, mars);

        robotInput.instructions.forEach(command => {
            if(!robot.isLost()) {
                switch(command) {
                    case 'R':
                        robot.turnRight();
                        break;
                    case 'L':
                        robot.turnLeft();
                        break;
                    case 'F':
                        robot.moveFront();
                        break;
                    default:
                        console.log('Not supported operation');
                }
            }
        });


        return robot;
    });

    return obtainMissionResults(resultRobots);
};

const obtainMissionResults = robots => {
    return robots.map(robot => [
        robot.getX(),
        robot.getY(),
        robot.getOrientation(),
        robot.isLost()
    ]);
};

module.exports = {
    executeMission,
};
