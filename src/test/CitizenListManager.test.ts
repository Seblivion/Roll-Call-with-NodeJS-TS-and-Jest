import {CitizenListManager} from "../classes/CitizenListManager";
import {Student} from "../classes/Student";

/*
    Testing facility
    Citizen list manager
*/
describe("This is testing ground for the citizen stack", () => {

    it("Testing instantiation of citizen list manager class and the list to string function", () => {
        const listOfStudents = [new Student(1, "Vlad", "Dracula"), new Student(2, "Gustav", "Adolf")];
        const citizenListManager = new CitizenListManager(listOfStudents);
        expect(citizenListManager.listToString()).toBe("1: Vlad Dracula, 2: Gustav Adolf");
    })

    // Create data for following tests
    var listOfStudents: Array<Student>;
    var citizenListManager: CitizenListManager;
    beforeEach(() => {
        listOfStudents = 
            [new Student(1, "Will", "Smith"), //"1: Will Smith"
            new Student(2, "Agent", "Smith"), //"2: Agent Smith"
            new Student(3, "Peter", "Pan"), //"3: Peter Pan"
            new Student(4, "Micky", "Mouse"), //"4: Micky Mouse"
            new Student(5, "Minnie", "Mouse"), //"5: Minnie Mouse"
            new Student(6, "Peter", "Gunn")]; //"6: Peter Gunn"
        citizenListManager = new CitizenListManager(listOfStudents);
    })

    it("Testing the roll call function in the citizen list manager class", () => {
        expect(citizenListManager.rollCall()).toEqual(["Peter Gunn", "Micky", "Minnie", "Peter Pan", "Agent", "Will"]);
    })

    it("Testing the sorting by first name", () => {
        citizenListManager.sortByFirstName();
        expect(citizenListManager.listToString()).toBe("2: Agent Smith, 4: Micky Mouse, 5: Minnie Mouse, 3: Peter Pan, 6: Peter Gunn, 1: Will Smith");
    });

    it("Testing the sorting by last name", () => {
        citizenListManager.sortByLastName();
        expect(citizenListManager.listToString()).toBe("6: Peter Gunn, 4: Micky Mouse, 5: Minnie Mouse, 3: Peter Pan, 1: Will Smith, 2: Agent Smith");
    });

    it("Testing the sorting by both names", () => {
        citizenListManager.sortByFirstAndLastName();
        expect(citizenListManager.listToString()).toBe("6: Peter Gunn, 4: Micky Mouse, 5: Minnie Mouse, 3: Peter Pan, 2: Agent Smith, 1: Will Smith");
    });

});