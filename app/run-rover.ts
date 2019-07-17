
export type forwardbackward = "F" | "B";
export type detection = "L" | "R";

export default class RunRover {
    coordinate: {x: number, y: number, z: string} = {
        x: 0,
        y: 0,
        z: "N"
    };

    boundary: {upper: number[]; lower: number[]} = {
        upper: [0, 0],
        lower: [100, 100]
    };

    direction = {
        north: 0,
        south: 1,
        east: 2,
        west: 3
    };

    face = ["N", "S", "E", "W"];

    move = (move: forwardbackward) => {
        const command: string = move.toUpperCase();
        switch (command) {
        case "F":
            return this.coordinate.y + 1;
        case "B":
            return this.coordinate.y - 1;
        }
    }

    turn = (turn: detection) => {
        const command: string = turn.toUpperCase();
        switch (command) {
            case "L":
                return this.coordinate.x - 1;
            case "R":
                return this.coordinate.x + 1;
            }
    }

    position = (): {x: number, y: number, z: string} => {
        return this.coordinate;
    }

    command = (go: () => {}) => {
        return go();
    }

}