import {ICitizen} from "../interfaces/ICitizen.js";

export class Student implements ICitizen {
    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toString(): string {
        return this.id + ": " + this.firstName + " " + this.lastName;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setId(id: number): void {
        this.id = id;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }
}