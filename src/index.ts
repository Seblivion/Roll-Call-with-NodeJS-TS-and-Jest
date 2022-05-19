import * as readline from 'readline';

import {CitizenListManager} from "./classes/CitizenListManager";
import {Student} from "./classes/Student";

function main() {
    let stdin = process.openStdin();
    let arrayWithNames: string[] = [];

    console.log("Add names to list by writing first AND last name, press enter, and keep adding names until you are done.");
    console.log("Write 'done' when finished.");
    // Let user write input
    stdin.addListener("data", function(objectToBeConvertedToString) {
        if(objectToBeConvertedToString.toString().trim() == "done") {
            let arrayOfStudents: Student[] = [];
            for(let i = 0; i < arrayWithNames.length; i++) {
                let tempArray: string[] = arrayWithNames[i].split(" ", 2);
                arrayOfStudents.push(new Student(i, tempArray[0], tempArray[1]));
            }
            // Results
            let citizenListManager = new CitizenListManager(arrayOfStudents);
            console.log(citizenListManager.rollCall().toString());
        }
        else {
            arrayWithNames.push(objectToBeConvertedToString.toString().trim());
        }
    });
}

main();