import {CitizenListManager} from "./classes/CitizenListManager";
import {Student} from "./classes/Student";

function main() {
    let stdin = process.openStdin();
    let numberOfNamesInserted: number = 0;
    let arrayOfStudents: Student[] = [];

    console.log("Add names to list by writing first AND last name, press enter, and keep adding names until you are done.");
    console.log("Names must consist of letters a-z, including capitals.");
    console.log("First and last name can't be more than 20 characters respectively.");
    console.log("Names must be more than 0 characters.");
    console.log("Write 'done' when finished.");
    console.log("Write 'clear' to clear the list from names.");
    console.log("Write 'quit' to exit the program.");
    console.log("");
    // Let user write input
    stdin.addListener("data", function(magicToBeTurnedIntoString) {
        if(magicToBeTurnedIntoString.toString().trim() == "done") {
            // Results
            let citizenListManager = new CitizenListManager(arrayOfStudents);
            let rollCallList: string[] = citizenListManager.rollCall();
            console.log("");
            console.log("*********** Roll call list ***********");
            rollCallList.forEach((name) => {
                console.log(name);
            });
            console.log("");
        }
        else if (magicToBeTurnedIntoString.toString().trim() == "quit") {
            process.exit(1);
        }
        else if (magicToBeTurnedIntoString.toString().trim() == "clear") {
            arrayOfStudents = [];
            numberOfNamesInserted = 0;
            console.log("");
        }
        else {
            if(numberOfNamesInserted > 200) {
                console.log("Can't add more names.");
            }
            else {
                let name = magicToBeTurnedIntoString.toString().trim();
                let arrayOfFirstAndLastName: string[] = name.split(" ", 2);
                try {
                    arrayOfStudents.push(new Student(
                        numberOfNamesInserted, arrayOfFirstAndLastName[0], arrayOfFirstAndLastName[1]));
                    numberOfNamesInserted++;
                }
                catch(e) {
                    // In case of invalid user input
                    console.log(e);
                }
            }
        }
    });
}

/* LET'S GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */
main();