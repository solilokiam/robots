class Mars {
    constructor({width, height}) {
        this.width = width;
        this.height = height;
        this.scents = [];
    }

    isOutOfBoundaries({ x, y }) {
        return x > this.width || x < 0 || y > this.height || y < 0;
    }

    scentExists({x,y}) {
        return this.scents.findIndex((scent) => (scent.x == x && scent.y == y)) !== -1;
    }

    leaveScent({x,y}) {
        this.scents.push({x,y});
    }
}

module.exports = Mars;
