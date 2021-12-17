const orientations = ['N','E','S','W'];

const calculateNextPosition = position => {
    switch (position.orientation) {
        case 'N':
            return { ...position, y: position.y + 1 };
        case 'S':
            return { ...position, y: position.y - 1 };
        case 'E':
            return { ...position, x: position.x + 1 };
        case 'W':
            return { ...position, x: position.x - 1 };
        default:
            return position;
    }
};

class Robot {
    constructor(initialPosition, planet) {
        this.position = initialPosition;
        this.planet = planet;
        this.lost = false;
    }

    turnLeft() {
        const {orientation} = this.position;
        const orientationIndex = orientations.indexOf(orientation);
        this.position.orientation = orientation !== 'N' ? orientations[orientationIndex - 1] : 'W';
    }

    turnRight() {
        const {orientation} = this.position;
        const orientationIndex = orientations.indexOf(orientation);
        this.position.orientation = orientation !== 'W' ? orientations[orientationIndex + 1] : 'N';
    }

    moveFront() {
        const newPosition = calculateNextPosition(this.position);

        if(this.planet.isOutOfBoundaries(newPosition)) {
            if(!this.planet.scentExists(newPosition)) {
                this.planet.leaveScent(newPosition);
                this.position = newPosition;
                this.lost = true;
            }
        } else {
            this.position = newPosition;
        }
    }

    getX() {
        return this.position.x;
    }

    getY() {
        return this.position.y;
    }

    getOrientation() {
        return this.position.orientation;
    }

    isLost() {
        return this.lost;
    }
}

module.exports = Robot;
