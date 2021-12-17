const parseInstructions = input => {
    const cleanInput = input.replace(/[\r\n]{2,}/g, "\n");
    const rows = cleanInput.split('\n');
    return {
        map: getMapDimensions(rows.shift()),
        robots: getRobots(rows)
    };
};

const getMapDimensions = mapRow => {
    return {
        width: Number(mapRow.split(' ')[0]),
        height: Number(mapRow.split(' ')[1])
    };
};

const getRobots = robotRows => {
    const robots = [];
    for (let i = 0; i < robotRows.length - 1; i += 2) {
        robots.push({
            position: {
                x: Number(robotRows[i].split(' ')[0]),
                y: Number(robotRows[i].split(' ')[1]),
                orientation: robotRows[i].split(' ')[2]
            },
            instructions: robotRows[i + 1].split('')
        });
    }
    return robots;
};

module.exports = {
    parseInstructions,
};
