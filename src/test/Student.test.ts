import {Student} from "../classes/Student";

/*
    Testing facility
    Student
*/
describe("This is testing ground for the Student class", () => {

    it("Testing instantiation of student class and a getter function", () => {
        const student = new Student(1, "Vlad", "Dracula");
        expect(student.getFirstName()).toBe("Vlad");
    })

    /* **************************** ERRORS **************************** */

    it("Testing error on swedish chars", () => {
        try {
            new Student(1, "Harald", "Stenhård");
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it("Testing error on name over 20 chars", () => {
        expect(() => { new Student(1, "Hubert", "Wolfeschlegelsteinhausenbergerdorff"); }).toThrow(Error);
    });

    it("Testing error on numbers in name", () => {
        expect(() => { new Student(1, "X", " ÆA-12"); }).toThrow(Error);
    });

    it("Testing error on empty name", () => {
        expect(() => { new Student(1, "", "Reaper"); }).toThrow(Error);
    });

    it("Testing error on lowercase start on name", () => {
        expect(() => { new Student(1, "Gustav", "adolf"); }).toThrow(Error);
    });

    it("Testing error on uppercase after first character", () => {
        expect(() => { new Student(1, "GRIM", "Reaper"); }).toThrow(Error);
    });

});