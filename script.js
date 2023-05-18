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

    toString() {
        return `[${this.#_leftTop.toString()}, ${this.#_rightBottom.toString()}]`;
    }
}