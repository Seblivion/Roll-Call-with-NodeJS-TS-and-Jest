import {ICitizen} from "../interfaces/ICitizen.js";

export class CitizenListManager {
    /* VARIABLES */
    // The variable making up the list content
    private arrayOfCitizens: ICitizen[];

    /* FUNCTIONS */
    constructor(arrayOfCitizens: ICitizen[] = []) {
        if(arrayOfCitizens.length == 0) {
            console.log("Warning: There were no people added to the list.");
        }
        this.arrayOfCitizens = arrayOfCitizens;
    }

    /*
        listToString
        Returns the content data of the list in form of string
    */
    public listToString(): string {
        let result: string = "";
        this.arrayOfCitizens.forEach((citizen) => {
            result += citizen.toString() + ", ";
        });
        // Remove space and the last comma before returning
        return result.substring(0, result.length - 2);
    }

    /*
        rollCall
        Provides you with names to be read when calling out a group of citizens
        Returns the first names of the citizens in the list ordered by first and last name
        If there are duplicates of a first name, then the last name is also provided
    */
    public rollCall(): string[] {
        // Slice is used to create a copy
        let arrayOfSortedCitizens: ICitizen[] = this.sortByFirstName().slice();
        // To be returned as output
        let arrayOfResults: string[] = [];
        let mapOfUniqueCitizenIds: Map<number, string> = new Map<number, string>();

        // Add all names to be called out to the result list
        let lastLastNameWasDuplicate: boolean = false;
        for(let i = 0; i < arrayOfSortedCitizens.length; i++) {
            if ((i+1) < arrayOfSortedCitizens.length && 
                    arrayOfSortedCitizens[i].getFirstName() == arrayOfSortedCitizens[i+1].getFirstName()) {
                lastLastNameWasDuplicate = true;
            }
            else if(lastLastNameWasDuplicate) {
                lastLastNameWasDuplicate = false;
            }
            else {
                // Set citizen as not a duplicate
                lastLastNameWasDuplicate = false;
                mapOfUniqueCitizenIds.set(arrayOfSortedCitizens[i].getId(), "");
            }
        }

        // Sort the list with citizens again
        arrayOfSortedCitizens = this.sortByFirstAndLastName(); 
        // Remove the last names of those who have no duplicates
        for(let i = 0; i < arrayOfSortedCitizens.length; i++) {
            if(mapOfUniqueCitizenIds.has(arrayOfSortedCitizens[i].getId())) {
                // Remove last name of uniquely named citizen
                arrayOfResults.push(arrayOfSortedCitizens[i].getFirstName());
            }
            else {
                arrayOfResults.push(arrayOfSortedCitizens[i].getFirstName() + " " + arrayOfSortedCitizens[i].getLastName());
            }
        }

        return arrayOfResults;
    } // end of rollCall

    /*
        sortByFirstAndLastName
        Sorts the list by both names with last name taking priority
    */
    public sortByFirstAndLastName(): ICitizen[] {
        this.sortByFirstName();
        this.sortByLastName();
        return this.arrayOfCitizens;
    }

    public sortByFirstName(): ICitizen[] {
        return this.arrayOfCitizens.sort((a, b) => a.getFirstName().localeCompare(b.getFirstName()));
    }

    public sortByLastName(): ICitizen[] {
        return this.arrayOfCitizens.sort((a, b) => a.getLastName().localeCompare(b.getLastName()));
    }

}