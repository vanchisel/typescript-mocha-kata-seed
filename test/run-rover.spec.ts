import RunRover from "../app/run-rover";
import {expect} from "chai";

describe("RunRover", () => {
    let rover: RunRover;

    beforeEach( () => {
        rover = new RunRover();
    });

    it("should exist", () => {
        expect(rover);
    });

    it("Should show rover initial position", () => {
        const position: {x: number, y: number} = rover.position();
        expect(position).to.equal({x: 0, y: 0, z: "N"});
    });
});