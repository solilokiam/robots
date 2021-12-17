const Mars = require('./mars');
const Robot = require('./robot');

describe('Robot Class', () => {
    it('turns left', () => {
        const robot = new Robot({x: 0, y: 0, orientation: 'N'});

        robot.turnLeft();
        expect(robot.getOrientation()).toEqual('W');
        robot.turnLeft();
        expect(robot.getOrientation()).toEqual('S');
        robot.turnLeft();
        expect(robot.getOrientation()).toEqual('E');
        robot.turnLeft();
        expect(robot.getOrientation()).toEqual('N');
    });

    it('turns right', () => {
        const robot = new Robot({x: 0, y: 0, orientation: 'N'});

        robot.turnRight();
        expect(robot.getOrientation()).toEqual('E');
        robot.turnRight();
        expect(robot.getOrientation()).toEqual('S');
        robot.turnRight();
        expect(robot.getOrientation()).toEqual('W');
        robot.turnRight();
        expect(robot.getOrientation()).toEqual('N');
    });

    it('moves forward to north', () => {
        const mars = new Mars({width: 2, height: 2});
        const robot = new Robot({x: 0, y: 0, orientation: 'N'}, mars);
        robot.moveFront();
        expect(robot.getY()).toBe(1);
        expect(robot.getX()).toBe(0);
        robot.moveFront();
        expect(robot.getY()).toBe(2);
        expect(robot.getX()).toBe(0);
        robot.moveFront();
        expect(robot.getY()).toBe(3);
        expect(robot.getX()).toBe(0);
        expect(robot.isLost()).toBe(true);
        expect(mars.scentExists({y: 3, x: 0})).toBe(true);
    });

    it('moves forward to south', () => {
        const mars = new Mars({width: 2, height: 2});
        const robot = new Robot({x: 0, y: 2, orientation: 'S'}, mars);
        robot.moveFront();
        expect(robot.getY()).toBe(1);
        expect(robot.getX()).toBe(0);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(0);
        robot.moveFront();
        expect(robot.getY()).toBe(-1);
        expect(robot.getX()).toBe(0);
        expect(robot.isLost()).toBe(true);
        expect(mars.scentExists({x: 0, y: -1})).toBe(true);
    });

    it('moves forward to east', () => {
        const mars = new Mars({width: 2, height: 2});
        const robot = new Robot({x: 0, y: 0, orientation: 'E'}, mars);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(1);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(2);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(3);
        expect(robot.isLost()).toBe(true);
        expect(mars.scentExists({y: 0, x: 3})).toBe(true);
    });

    it('moves forward to west', () => {
        const mars = new Mars({width: 2, height: 2});
        const robot = new Robot({x: 2, y: 0, orientation: 'W'}, mars);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(1);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(0);
        robot.moveFront();
        expect(robot.getY()).toBe(0);
        expect(robot.getX()).toBe(-1);
        expect(robot.isLost()).toBe(true);
        expect(mars.scentExists({y: 0, x: -1})).toBe(true);
    });

    it('cannot move when out of boundaris scented place', ()=>{
        const mars = new Mars({width: 2, height: 2});
        mars.leaveScent({x: 2, y: 3})
        const robot = new Robot({x: 2, y: 2, orientation: 'N'}, mars);
        robot.moveFront();
        expect(robot.getY()).toBe(2);
        expect(robot.getX()).toBe(2);
    });
})
