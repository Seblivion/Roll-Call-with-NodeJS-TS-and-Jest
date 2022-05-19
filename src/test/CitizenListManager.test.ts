import {CitizenListManager} from "../classes/CitizenListManager.js";
import {Student} from "../classes/Student.js";

describe("This is testing ground for the citizen stack", () => {

    it("Testing instantiation of citizen interface and student class", () => {
        const student = new Student(1, "Vlad", "Dracula");
        expect(student.getFirstName()).toBe("Vlad");
    })

    it("Testing instantiation of citizen list manager class", () => {
        const listOfStudents = [new Student(1, "Vlad", "Dracula"), new Student(2, "Gustav", "Adolf")];
        const citizenListManager = new CitizenListManager(listOfStudents);
        expect(citizenListManager.listToString()).toBe("1: Vlad Dracula, 2: Gustav Adolf");
    })

    it("Testing the roll call function in the citizen list manager class", () => {
        const listOfStudents = 
            [new Student(1, "Will", "Smith"), 
            new Student(2, "Agent", "Smith"),
            new Student(3, "Peter", "Pan"),
            new Student(4, "Micky", "Mouse"),
            new Student(5, "Minnie", "Mouse"),
            new Student(6, "Peter", "Gunn")];
        const citizenListManager = new CitizenListManager(listOfStudents);
        expect(citizenListManager.rollCall()).toEqual(["Peter Gunn", "Micky", "Minnie", "Peter Pan", "Agent", "Will"]);
    })

});