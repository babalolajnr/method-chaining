import { Query } from "../main";

describe("Query", () => {
    it("should return a string", () => {
        const queryString = new Query();
        expect(queryString.select(undefined, ['first_name', 'last_name']).from('students').execute()).toBe("SELECT first_name,last_name FROM students");
    });
})