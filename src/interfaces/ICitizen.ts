
export interface ICitizen {
    // Returns the object as a string of readable data
    toString(): string;
    // Getters and setters
    getId(): number;
    getFirstName(): string;
    getLastName(): string;
    setId(id: number): void;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
}