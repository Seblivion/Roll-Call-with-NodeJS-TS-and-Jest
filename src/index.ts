import * as readline from 'readline';

import {CitizenListManager} from "./classes/CitizenListManager";
import {Student} from "./classes/Student";

function main() {
    let stdin = process.openStdin();
    let numberOfInputs: number = 0;
    let arrayOfStudents: Student[] = [];

    console.log("Add names to list by writing first AND last name, press enter, and keep adding names until you are done.");
    console.log("Names must consist of letters a-z, including capitals.");
    console.log("First and last name can't be more than 20 characters respectively.");
    console.log("Names must be more than 0 characters.");
    console.log("Write 'done' when finished.");
    // Let user write input
    stdin.addListener("data", function(magicToBeTurnedIntoString) {
        if(magicToBeTurnedIntoString.toString().trim() == "done") {
            // Results
            let citizenListManager = new CitizenListManager(arrayOfStudents);
            let rollCallList: string[] = citizenListManager.rollCall();
            console.log("Roll call list:");
            rollCallList.forEach((name) => {
                console.log(name);
            });
            process.exit(1);
        }
        else {
            if(numberOfInputs > 200) {
                console.log("Can't add more names.");
            }
            else {
                let name = magicToBeTurnedIntoString.toString().trim();
                let arrayOfFirstAndLastName: string[] = name.split(" ", 2);
                try {
                    arrayOfStudents.push(new Student(
                        numberOfInputs, arrayOfFirstAndLastName[0], arrayOfFirstAndLastName[1]));
                    numberOfInputs++;
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