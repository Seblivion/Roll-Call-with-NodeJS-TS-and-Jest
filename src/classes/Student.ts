import {ICitizen} from "../interfaces/ICitizen.js";

/*
    An implementation of the citizen interface.
    No functionality unique to students added as of yet.
*/
export class Student implements ICitizen {

    /* VARIABLES */

    private id: number;
    private firstName: string;
    private lastName: string;

    /* PUBLIC FUNCTIONS */

    constructor(id: number, firstName: string, lastName: string) {
        if(!this.isValidName(firstName) || !this.isValidName(lastName)) {
            throw new Error('You can only use letters and max 20 characters.');
        }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public toString(): string {
        return this.id + ": " + this.firstName + " " + this.lastName;
    }

    public getId(): number {
        return this.id;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setFirstName(firstName: string): void {
        this.isValidName(firstName);
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        if(this.isValidName(lastName))
            this.lastName = lastName;
        else
            return;
    }

    /* PRIVATE FUNCTIONS */

    private isValidName(name: string): boolean {
        if(/[^a-zA-Z]/.test(name) || name.length > 20 || name.length <= 0 ) {
            return false;
        }
        return true;
    }
}