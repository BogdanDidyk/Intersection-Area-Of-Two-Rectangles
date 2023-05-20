Number.isPositive = function(value) {
    return typeof value == "number" && !Number.isNaN(value) && value >= 0;
};

class Point {
    #_x;
    #_y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#_x;
    }

    set #x(value) {
        if (!Number.isPositive(value)) value = 0;
        this.#_x = value;
    }

    get y() {
        return this.#_y;
    }

    set #y(value) {
        if (!Number.isPositive(value)) value = 0;
        this.#_y = value;
    }

    toString() {
        return `(${this.#_x}; ${this.#_y})`;
    }
}

class Rectangle {
    #_leftTop;
    #_rightBottom;

    constructor(leftTop, rightBottom) {
        this.#leftTop = leftTop;
        this.#rightBottom = rightBottom;
    }

    get leftTop() {
        return this.#_leftTop;
    }

    set #leftTop(value) {
        if (!(value instanceof Point)) value = new Point(0, 0);
        this.#_leftTop = value;
    }

    get rightBottom() {
        return this.#_rightBottom;
    }

    set #rightBottom(value) {
        if (!(value instanceof Point)) value = new Point(0, 0);
        this.#_rightBottom = value;
    }

    static getIntersectionAreaOfRectangles(rect1, rect2) {
        if (!(rect1 instanceof Rectangle) || !(rect2 instanceof Rectangle)) return NaN;

        const left = Math.max(rect1.leftTop.x, rect2.leftTop.x);
        const right = Math.min(rect1.rightBottom.x, rect2.rightBottom.x);
        const top = Math.max(rect1.leftTop.y, rect2.leftTop.y);
        const bottom = Math.min(rect1.rightBottom.y, rect2.rightBottom.y);

        if (left < right && top < bottom) return (right - left) * (bottom - top);
        else return 0;
    }

    toString() {
        return `[${this.#_leftTop.toString()}, ${this.#_rightBottom.toString()}]`;
    }
}

const rect1 = new Rectangle(new Point(0, 1), new Point(5, 4));
const rect2 = new Rectangle(new Point(2, 1), new Point(4, 6));
const area = Rectangle.getIntersectionAreaOfRectangles(rect1, rect2);
console.log(`rect1 = ${rect1}\nrect2 = ${rect2}\narea = ${area}`);